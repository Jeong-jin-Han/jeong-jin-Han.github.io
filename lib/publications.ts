export interface Publication {
    title: string
    authors: string
    venue: string
    year: string
    abstract: string
    url: string
    tags: string[]
    type: "publication" | "report"
}

export const publications: Publication[] = [
    {
        title: "SHIFT: Sigmoid-Based Heuristic Invertible Fitness-Landscape Transformation",
        authors: "Jeongjin Han, Seunghoon Sim, Jian Lee, Seongyoon Park",
        venue: "arXiv preprint",
        year: "2025",
        abstract: "A sigmoid-based invertible fitness-landscape transformation for search-based software testing (SBST), enabling hill climbing to escape plateaus. Applies compiler techniques (AST-based instrumentation, constant folding, SSA-like variable-shading) to Python source transformation, with parallel time-budgeted evaluation infrastructure.",
        url: "https://arxiv.org/abs/2604.09171",
        tags: ["SBST", "Search-Based Testing", "Compiler Techniques", "Hill Climbing"],
        type: "publication",
    },
    {
        title: "VRAIL: Vectorized Reward-based Attribution for Interpretable Learning",
        authors: "Jeongjin Han, et al.",
        venue: "arXiv preprint",
        year: "2025",
        abstract: "A bi-level RL framework that learns interpretable linear/quadratic value estimators as potential-based reward shaping functions, improving DQN convergence stability in Taxi-v3. Includes reward transfer experiments and α-scheduling trials.",
        url: "https://arxiv.org/abs/2506.16014",
        tags: ["Reinforcement Learning", "Reward Shaping", "Interpretability"],
        type: "publication",
    },
    {
        title: "Transient Thermal-Hydraulic Analysis of an Overcooling Accident in a Pressurized Water Reactor",
        authors: "Jeongjin Han",
        venue: "NQE625: Computational Analysis in Nuclear Systems, KAIST",
        year: "2025",
        abstract: "A multi-channel 1-D nuclear system code implemented from scratch in MATLAB, modeling coupled fluid dynamics, point kinetics with delayed neutrons, fuel heat conduction (FVM), and steam generator primary–secondary coupling. Steady-state and transient analyses validated against the industry-standard MARS code across 10 physical quantities.",
        url: "/nqe625-final.pdf",
        tags: ["Thermal-Hydraulics", "FVM", "Nuclear System Code", "MATLAB"],
        type: "report",
    },
    {
        title: "Steady-State Thermal-Hydraulic Analysis of a Multi-Channel PWR Core",
        authors: "Jeongjin Han",
        venue: "NQE625: Computational Analysis in Nuclear Systems, KAIST",
        year: "2025",
        abstract: "Multi-channel steady-state analysis of a PWR core implementing finite-difference and finite-volume methods for coupled heat conduction and fluid flow. Covers constitutive relations (HTC, friction factor, CHF), channel mass flux distribution, and thermal margin evaluation with 2-D core map visualization.",
        url: "/nqe625-midterm.pdf",
        tags: ["Thermal-Hydraulics", "FDM", "FVM", "PWR", "MATLAB"],
        type: "report",
    },
]

export function getPublications(): Publication[] {
    return publications.filter(p => p.type === "publication").sort((a, b) => parseInt(b.year) - parseInt(a.year))
}

export function getReports(): Publication[] {
    return publications.filter(p => p.type === "report").sort((a, b) => parseInt(b.year) - parseInt(a.year))
}
