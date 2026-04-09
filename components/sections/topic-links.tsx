import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const topics = [
    { name: "Computer Architecture", href: "/blog/topic/computer-architecture" },
    { name: "Memory Systems", href: "/blog/topic/memory-systems" },
    { name: "Systems Programming", href: "/blog/topic/systems-programming" },
    { name: "Simulation & HPC", href: "/blog/topic/simulation-hpc" },
    { name: "Deep Learning", href: "/blog/topic/deep-learning" },
    { name: "Research Notes", href: "/blog/topic/research-notes" },
    { name: "Essay", href: "/blog/topic/essay" },
]

export function TopicLinks() {
    return (
        <Card className="border-border bg-background shadow-none">
            <CardHeader>
                <CardTitle>Topics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
                {topics.map((topic) => (
                    <Button
                        key={topic.name}
                        variant="outline"
                        className="justify-between hover:bg-accent hover:text-accent-foreground"
                        asChild
                    >
                        <Link href={topic.href}>
                            {topic.name}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                ))}
            </CardContent>
        </Card>
    )
}
