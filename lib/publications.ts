export interface Publication {
    title: string
    authors: string
    venue: string
    year: string
    abstract: string
    url: string
    tags: string[]
}

// Add your publications here
export const publications: Publication[] = [
    {
        title: "Example Publication Title",
        authors: "Jeongjin Han, et al.",
        venue: "Conference/Journal Name",
        year: "2024",
        abstract: "This is a brief abstract of the publication. Replace with your actual publication details.",
        url: "#",
        tags: ["Machine Learning", "AI"],
    },
    // Add more publications as needed
]

export function getPublications(): Publication[] {
    return publications.sort((a, b) => parseInt(b.year) - parseInt(a.year))
}
