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
                                <strong className="text-foreground">Memory Hierarchy &amp; RTL-Level Design</strong>: architectural exploration of memory hierarchy design with interest in RTL-level hardware component development.
                            </li>
                            <li>
                                <strong className="text-foreground">CXL-Based Disaggregated Memory</strong>: interest in memory-pressure-driven smart routing in CXL-based disaggregated memory systems and hardware/software co-design.
                            </li>
                            <li>
                                <strong className="text-foreground">Distributed ML State Management</strong>: seamless resumption of distributed ML training through consistent multi-process state capture (RNG, optimizer, data loader state).
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Preprints</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-lg font-semibold">SHIFT: Sigmoid-Based Heuristic Invertible Fitness-Landscape Transformation</h3>
                                    <span className="text-sm text-muted-foreground">2025</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">Jeongjin Han, Seunghoon Sim, Jian Lee, Seongyoon Park &mdash; <strong className="text-foreground">First author</strong></p>
                                <p className="text-sm text-muted-foreground"><a href="https://arxiv.org/abs/2604.09171" className="underline hover:text-foreground" target="_blank">arXiv:2604.09171</a></p>
                            </div>
                            <div>
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-lg font-semibold">VRAIL: Vectorized Reward-based Attribution for Interpretable Learning</h3>
                                    <span className="text-sm text-muted-foreground">2025</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">Co-author (equal contribution)</p>
                                <p className="text-sm text-muted-foreground"><a href="https://arxiv.org/abs/2506.16014" className="underline hover:text-foreground" target="_blank">arXiv:2506.16014</a></p>
                            </div>
                        </div>
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
                                    <li>Identified <strong className="text-foreground">system-level bottlenecks</strong> under memory and bandwidth constraints across heterogeneous CPU–GPU pipelines.</li>
                                    <li>Led pipeline redesign to resolve a <strong className="text-foreground">GPU underutilization bottleneck</strong> caused by a CPU-bound simulator; decoupled policy optimization from environment interaction, improving <strong className="text-foreground">hardware utilization</strong>.</li>
                                    <li>Reverse-engineered the <strong className="text-foreground">process memory layout</strong> of a closed-source Windows VM simulator to extract and inject runtime state variables, enabling system integration without source access or binary modification.</li>
                                    <li>Designed and implemented a TCP/Docker-based distributed execution infrastructure bridging a Windows VM and a GPU server, managing cross-system state synchronization under <strong className="text-foreground">memory bandwidth and latency</strong> constraints.</li>
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
                                    {["C++", "Rust", "Python", "MATLAB", "Scala", "Verilog"].map((tech) => (
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
