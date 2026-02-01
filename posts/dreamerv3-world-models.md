---
title: "DreamerV3: Learning World Models for Reinforcement Learning"
date: "2026-01-30"
description: "Exploring DreamerV3, a state-of-the-art model-based reinforcement learning algorithm that learns to imagine and plan in latent space."
topics: ["Deep Learning", "Reinforcement Learning"]
---

# DreamerV3: Learning World Models for Reinforcement Learning

DreamerV3 represents a significant advancement in model-based reinforcement learning, achieving strong performance across diverse domains from Atari to robotic control.

## The World Model Paradigm

Instead of learning a policy directly from observations, DreamerV3:
1. Learns a **world model** of the environment
2. Uses the model to **imagine** future trajectories
3. Learns behaviors **entirely in imagination**

This approach offers several advantages:
- **Sample efficiency**: Learn from imagined experience
- **Planning**: Look ahead before acting
- **Transfer**: World model knowledge generalizes

## Architecture Overview

DreamerV3 consists of three main components:

### 1. World Model
Learns the dynamics: $p(s_{t+1}, r_t | s_t, a_t)$

**Representation Model** (Encoder):
$$
h_t = f_\phi(h_{t-1}, z_{t-1}, a_{t-1})
$$
$$
z_t \sim q_\phi(z_t | h_t, x_t)
$$

**Transition Model** (Dynamics):
$$
\hat{z}_t \sim p_\theta(\hat{z}_t | h_t)
$$

**Reward Model**:
$$
\hat{r}_t = p_\psi(r_t | h_t, z_t)
$$

### 2. Actor Network
Learns policy $\pi_\xi(a_t | z_t)$ to maximize imagined returns

### 3. Critic Network
Estimates value $V_\zeta(z_t)$ for policy evaluation

## Key Innovations in V3

### 1. Symlog Predictions
Symmetrically logarithmic encoding for unbounded targets:

$$
\text{symlog}(x) = \text{sign}(x) \ln(|x| + 1)
$$

Enables learning across different reward scales

### 2. Percentile-Based Value Normalization
Normalizes values using running statistics:
- More stable than standard normalization
- Handles non-stationary distributions

### 3. Free Bits for KL Regularization
Prevents posterior collapse in VAE:

$$
\mathcal{L}_{KL} = \max(\text{KL}[q||p], \beta)
$$

## Training Algorithm

```python
# Simplified training loop
for step in range(total_steps):
    # 1. Collect experience
    action = policy(state)
    next_state, reward = env.step(action)
    buffer.add(state, action, reward)

    # 2. Update world model
    batch = buffer.sample()
    world_model_loss = reconstruction_loss + kl_loss
    update_world_model(world_model_loss)

    # 3. Imagine trajectories
    imagined_states = []
    state = encoder(batch.observations)
    for _ in range(horizon):
        action = policy(state)
        state = world_model.predict(state, action)
        imagined_states.append(state)

    # 4. Update actor-critic
    values = critic(imagined_states)
    returns = compute_returns(values, rewards)
    policy_loss = -returns.mean()
    value_loss = (values - returns).pow(2).mean()
    update_actor_critic(policy_loss, value_loss)
```

## Performance Highlights

DreamerV3 achieves:
- **Atari**: Median human-normalized score of 230%
- **DMC**: State-of-the-art on continuous control
- **Minecraft**: Collects diamonds from scratch
- **Sample efficiency**: 20× better than model-free methods

## Latent Imagination

The power of DreamerV3 lies in learning compact latent representations:

- **Deterministic path** $h_t$: Remembers history
- **Stochastic path** $z_t$: Captures uncertainty
- Together: Rich, efficient world model

## Applications

- Robotics: Sim-to-real transfer
- Game playing: Strategic planning
- Autonomous driving: Safety-critical prediction
- Scientific discovery: Hypothesis testing

## Conclusion

DreamerV3 demonstrates that learning to model the world enables sample-efficient RL across diverse domains. By imagining futures in latent space, agents can plan effectively and generalize broadly.

## References

- Hafner et al. (2023). "Mastering Diverse Domains through World Models"
- Ha & Schmidhuber (2018). "World Models"
