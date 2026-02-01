import { NextResponse } from 'next/server'
import { getPosts } from '@/lib/posts'
import { getGithubRepos } from '@/lib/github'
import { getPublications } from '@/lib/publications'

export async function GET() {
    try {
        // Get all blog posts
        const posts = getPosts()
        console.log('Posts found:', posts.length)
        const postResults = posts.map(post => ({
            type: 'Post' as const,
            title: post.title,
            description: post.description,
            tags: post.topics,
            url: `/blog/${post.slug}`,
            date: post.date,
        }))

        // Get all projects from GitHub
        const projects = await getGithubRepos()
        console.log('Projects found:', projects.length)
        const projectResults = projects.map(project => ({
            type: 'Project' as const,
            title: project.title,
            description: project.description,
            tags: project.tags,
            url: project.github,
            date: new Date().toISOString().split('T')[0], // Current date as fallback
        }))

        // Get all publications
        const publications = getPublications()
        console.log('Publications found:', publications.length)
        const publicationResults = publications.map(pub => ({
            type: 'Publication' as const,
            title: pub.title,
            description: `${pub.authors} - ${pub.venue}, ${pub.year}. ${pub.abstract}`,
            tags: pub.tags,
            url: pub.url,
            date: pub.year,
        }))

        // Combine all results
        const allResults = [...postResults, ...projectResults, ...publicationResults]
        console.log('Total search results:', allResults.length)
        console.log('Sample result:', allResults[0])

        return NextResponse.json(allResults)
    } catch (error) {
        console.error('Error generating search index:', error)
        return NextResponse.json({ error: 'Failed to generate search index' }, { status: 500 })
    }
}

// Enable dynamic rendering
export const dynamic = 'force-dynamic'
