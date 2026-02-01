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
                        My goal
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Research Interests</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                                <strong className="text-foreground">topic 1</strong>: description is here.
                            </li>
                            <li>
                                <strong className="text-foreground">topic 2</strong>: description is here.
                            </li>
                            <li>
                                <strong className="text-foreground">topic 3</strong>: description is here.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Research Experience</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">Lab 1</h3>
                                <p className="text-sm text-muted-foreground mb-2">Advisor: Prof. </p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li><strong className="text-foreground">Topic:</strong> description is here.</li>
                                    <li><strong className="text-foreground">Details:</strong> description is here.</li>
                                </ul>
                            </div>

                            <div className="pt-2">
                                <h3 className="text-lg font-semibold mb-2">Pre-University Research Projects</h3>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>description is here.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Academic Highlights</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">Tag1</strong>: keywords</li>
                            <li><strong className="text-foreground">Tag2</strong>: keywords</li>
                            <li><strong className="text-foreground">Tag3</strong>: keywords</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "C++", "Rust", "Scala", "PyTorch", "HuggingFace", "SQL", "LaTeX"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold border-b pb-2">Personal Preferences</h2>
                        <p className="text-muted-foreground">description is here.</p>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">Literature</strong>: </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
