import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { publications } from "../lib/publications"

const GITHUB_USERNAME = "Jeong-jin-Han"

interface SearchEntry {
    type: "Post" | "Project" | "Publication"
    title: string
    description: string
    tags: string[]
    url: string
    date: string
}

async function generateSearchIndex() {
    const entries: SearchEntry[] = []

    // 1. Posts
    const postsDir = path.join(process.cwd(), "posts")
    if (fs.existsSync(postsDir)) {
        const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"))
        for (const file of files) {
            const content = fs.readFileSync(path.join(postsDir, file), "utf8")
            const { data, content: body } = matter(content)
            const slug = file.replace(/\.md$/, "")
            entries.push({
                type: "Post",
                title: data.title || slug,
                description: data.description || body.slice(0, 150),
                tags: data.topics || [],
                url: `/blog/${slug}`,
                date: data.date || "",
            })
        }
    }

    // 2. Publications (from lib/publications.ts)
    for (const pub of publications) {
        entries.push({
            type: "Publication",
            title: pub.title,
            description: `${pub.authors} — ${pub.venue}, ${pub.year}. ${pub.abstract}`,
            tags: pub.tags,
            url: pub.url,
            date: pub.year,
        })
    }

    // 3. Projects (GitHub API)
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        if (res.ok) {
            const repos = await res.json()
            for (const repo of repos) {
                if (repo.fork) continue
                entries.push({
                    type: "Project",
                    title: repo.name,
                    description: repo.description || "No description available.",
                    tags: repo.topics?.length ? repo.topics : [repo.language].filter(Boolean),
                    url: repo.html_url,
                    date: repo.updated_at,
                })
            }
        }
    } catch (e) {
        console.warn("Failed to fetch GitHub repos for search index:", e)
    }

    const outputPath = path.join(process.cwd(), "public", "search.json")
    fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2))
    console.log(`✓ search.json generated (${entries.length} entries)`)
}

generateSearchIndex()
