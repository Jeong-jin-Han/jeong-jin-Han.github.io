import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | HJJ Blog",
    description: "About me and my research interests.",
}

export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
                    <p className="text-xl text-muted-foreground">
                        Senior undergraduate at KAIST (School of Computing &amp; Nuclear and Quantum Engineering),
                        interested in computer architecture, systems software, and hardware–software co-design.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Research Interests</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                                <strong className="text-foreground">Memory-Centric Systems</strong>: data movement optimization and memory hierarchy design in modern computing systems.
                            </li>
                            <li>
                                <strong className="text-foreground">Large-Scale Simulation &amp; Parallelism</strong>: performance optimization and scalability analysis of compute-intensive simulation workloads.
                            </li>
                            <li>
                                <strong className="text-foreground">System State Management</strong>: consistent snapshot, checkpointing, and deterministic execution in distributed and simulation environments.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Research Experience</h2>

                        <div className="space-y-6">
                            <div>
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-lg font-semibold">Nuclear I&amp;C and Autonomous Operation Lab, KAIST</h3>
                                    <span className="text-sm text-muted-foreground">Winter 2025</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">Undergraduate Researcher &mdash; Advisor: Prof. Jonghyun Kim</p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>Identified GPU underutilization bottleneck caused by a CPU-bound simulator; redesigned the training pipeline to decouple policy optimization from environment interaction, improving hardware utilization under system resource constraints.</li>
                                    <li>Reverse-engineered the process memory layout of a closed-source Windows VM simulator to extract and inject runtime state variables, enabling system integration without source access or binary modification.</li>
                                    <li>Designed and implemented a TCP/Docker-based distributed execution infrastructure bridging a Windows VM and a GPU server, managing cross-system state synchronization and execution control.</li>
                                    <li>Enabled efficient training of RL agents under system-level constraints including memory bandwidth and execution latency bottlenecks.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-lg font-semibold">Reactor Physics and Transmutation Lab, KAIST</h3>
                                    <span className="text-sm text-muted-foreground">Winter 2024</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">Undergraduate Researcher &mdash; Advisor: Prof. Yonghee Kim</p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>Conducted Monte Carlo neutron transport simulations using <strong className="text-foreground">OpenMC</strong>, analyzing neutron moderation behavior under Thermal Scattering Law (TSL) models from the ENDF/B-VIII.1 nuclear data library.</li>
                                    <li>Investigated computational and memory characteristics of large-scale Monte Carlo simulation workloads, and analyzed scalability behavior under parallel execution.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Tech Stack</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm font-semibold mb-2">Languages</p>
                                <div className="flex flex-wrap gap-2">
                                    {["C++", "Rust", "Python", "MATLAB", "Scala"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold mb-2">Tools &amp; Frameworks</p>
                                <div className="flex flex-wrap gap-2">
                                    {["PyTorch", "gem5", "Docker", "HuggingFace", "LaTeX", "Git", "Linux"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
