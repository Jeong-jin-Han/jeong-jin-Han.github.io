import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')

// Get GitHub projects
async function getGithubProjects() {
    const GITHUB_USERNAME = "Jeong-jin-Han"

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)

        if (!response.ok) {
            console.error('Failed to fetch GitHub repos')
            return []
        }

        const repos = await response.json()

        return repos
            .filter(repo => !repo.fork)
            .map(repo => ({
                type: 'Project',
                title: repo.name,
                description: repo.description || "No description available.",
                tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean),
                url: repo.html_url,
                date: repo.updated_at,
            }))
    } catch (error) {
        console.error('Error fetching GitHub repos:', error)
        return []
    }
}

// Get blog posts
function getBlogPosts() {
    const postsDir = path.join(rootDir, 'posts')

    if (!fs.existsSync(postsDir)) {
        return []
    }

    const files = fs.readdirSync(postsDir)

    return files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const filePath = path.join(postsDir, file)
            const fileContents = fs.readFileSync(filePath, 'utf8')
            const { data, content } = matter(fileContents)

            const slug = file.replace(/\.md$/i, '')
            const title = data.title || content.match(/^#\s+(.+)$/m)?.[1] || slug
            const description = data.description || content.slice(0, 150) + '...'
            const date = data.date || new Date().toISOString().split('T')[0]
            const tags = data.topics || []

            return {
                type: 'Post',
                title,
                description,
                tags,
                url: `/blog/${slug}`,
                date,
            }
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get publications (from lib/publications.ts)
function getPublications() {
    // For now, return example publications
    // You can update this to read from lib/publications.ts if needed
    return [
        {
            type: 'Publication',
            title: 'Example Publication Title',
            description: 'Jeongjin Han, et al. - Conference/Journal Name, 2024. This is a brief abstract of the publication.',
            tags: ['Machine Learning', 'AI'],
            url: '#',
            date: '2024',
        },
    ]
}

// Generate search index
async function generateSearchIndex() {
    console.log('Generating search index...')

    const posts = getBlogPosts()
    const projects = await getGithubProjects()
    const publications = getPublications()

    const searchIndex = [...posts, ...projects, ...publications]

    console.log(`Found ${posts.length} posts, ${projects.length} projects, ${publications.length} publications`)

    const outputPath = path.join(rootDir, 'public', 'search.json')
    fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2))

    console.log(`Search index generated at ${outputPath}`)
    console.log(`Total items: ${searchIndex.length}`)
}

generateSearchIndex()
