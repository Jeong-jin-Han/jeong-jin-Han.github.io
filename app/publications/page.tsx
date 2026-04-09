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
import { getPublications, getReports, Publication } from "@/lib/publications"

export const metadata: Metadata = {
    title: "Papers & Reports | HJJ Blog",
    description: "Research publications and technical reports.",
}

const publications = getPublications()
const reports = getReports()

function PubCard({ pub }: { pub: Publication }) {
    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg leading-snug mb-3">{pub.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                pub.venue === "TBA"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : pub.type === "report"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}>
                                {pub.venue === "TBA" ? "⏳ TBA" : pub.venue}
                            </span>
                            <span className="text-xs text-muted-foreground">{pub.year}</span>
                        </div>
                    </div>
                    {pub.url !== "#" && (
                        <Button variant="outline" size="sm" asChild className="shrink-0">
                            <Link href={pub.url} target="_blank">
                                <ExternalLink className="h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{pub.abstract}</p>
                <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default function PublicationsPage() {
    return (
        <div className="container mx-auto py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-5xl space-y-12">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Papers &amp; Reports</h1>
                    <p className="text-xl text-muted-foreground">
                        Research publications and technical reports.
                    </p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b pb-2">Publications</h2>
                    {publications.length === 0 ? (
                        <p className="text-muted-foreground">No publications yet.</p>
                    ) : (
                        <div className="space-y-6">
                            {publications.map((pub, index) => (
                                <PubCard key={index} pub={pub} />
                            ))}
                        </div>
                    )}
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b pb-2">Technical Reports</h2>
                    {reports.length === 0 ? (
                        <p className="text-muted-foreground">No reports yet.</p>
                    ) : (
                        <div className="space-y-6">
                            {reports.map((pub, index) => (
                                <PubCard key={index} pub={pub} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
