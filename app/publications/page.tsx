import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPublications } from "@/lib/publications"

export const metadata: Metadata = {
    title: "Publications | HJJ Blog",
    description: "My research publications and academic works.",
}

const publications = getPublications()

export default function PublicationsPage() {
    return (
        <div className="container mx-auto py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-5xl space-y-8">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Publications</h1>
                    <p className="text-xl text-muted-foreground">
                        Research publications and academic works.
                    </p>
                </div>

                {publications.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">
                            No publications yet. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {publications.map((pub, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                                            <div className="space-y-1 text-base text-muted-foreground">
                                                <p className="font-medium">{pub.authors}</p>
                                                <p className="italic">{pub.venue}, {pub.year}</p>
                                            </div>
                                        </div>
                                        {pub.url !== "#" && (
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={pub.url} target="_blank">
                                                    <ExternalLink className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {pub.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
