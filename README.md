# Personal Portfolio Blog

A personal portfolio and blog platform built with Next.js.

Live Site: https://jeong-jin-han.github.io/

## Quick Start

### Installation and Run

```bash
# 1. Clone repository
git clone https://github.com/Jeong-jin-Han/jeong-jin-han.github.io.git
cd jeong-jin-han.github.io

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### How to Add Blog Posts

1. Create a new `.md` file in the `posts/` directory.
2. Add the following Frontmatter at the top of the file:

```yaml
---
title: "Post Title"
date: "2026-02-02"
description: "Post Summary"
topics: ["Topic1", "Topic2"]
---
```

3. Write your content in Markdown format (supports LaTeX math equations).
4. Regenerate the search index:

```bash
node scripts/generate-search-index.mjs
```

5. Push to the `main` branch to automatically deploy via GitHub Actions.

## Features

- 📝 **Blog Posts**: Write posts in Markdown with frontmatter metadata
- 🔍 **Search**: Fast search across all posts, projects, and publications (⌘K)
- 🏷️ **Topic Filtering**: Organize posts by categories
- 📊 **GitHub Projects**: Automatically fetch and display your GitHub repositories
- 📚 **Publications**: Showcase your research and academic work
- 🎨 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive**: Mobile-friendly design
- ⚡ **Fast**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Markdown**: react-markdown with plugins
- **Math Rendering**: KaTeX
- **Syntax Highlighting**: highlight.js
- **Search**: Fuse.js
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## Project Structure

```
jeong-jin-han.github.io/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Individual blog post
│   │   └── topic/[slug]/  # Topic filter pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   └── publications/      # Publications page
├── components/            # React components
│   ├── layout/           # Layout components (navbar, footer)
│   ├── sections/         # Section components (hero, topic-links)
│   └── ui/               # UI components (shadcn/ui)
├── lib/                   # Utility functions
│   ├── posts.ts          # Blog post utilities
│   ├── github.ts         # GitHub API integration
│   └── publications.ts   # Publications data
├── posts/                 # Blog post markdown files
├── public/                # Static assets
│   ├── search.json       # Search index
│   └── hero-image.png    # Hero image
└── scripts/               # Utility scripts
    └── generate-search-index.mjs  # Search index generator
```

## Available Topics

- Deep Learning
- Hardware Architecture
- Nuclear Reactor Design
- Book Review
- Essay

## Customization

### Update Hero Section

Edit `components/sections/hero.tsx`:
- Change name and description
- Update hero image in `public/hero-image.png`

### Update Topics

Edit `components/sections/topic-links.tsx` to add/remove topics.

### Add Publications

Edit `lib/publications.ts` to add your research papers and publications.

### GitHub Projects

Update your GitHub username in `lib/github.ts`:
```typescript
const GITHUB_USERNAME = "Jeong-jin-Han"
```

## Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Utilities
node scripts/generate-search-index.mjs  # Regenerate search index
```

## Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

Make sure GitHub Pages is configured to deploy from the `gh-pages` branch.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Jeongjin Han - Senior Undergraduate Student @ KAIST, School of Computing

Exploring mathematically grounded design of domain-specific architectures for intelligent workloads.
