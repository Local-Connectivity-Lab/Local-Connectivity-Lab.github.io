import { marked } from 'marked';
import type { GitHubIssue, BlogPost, BlogListResponse } from './types.js';

const GITHUB_REPO = 'Local-Connectivity-Lab/Local-Connectivity-Lab.github.io';
const BLOG_LABEL = 'blog';

// Configure marked for safe HTML output
marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: false, // We trust GitHub issue content
    smartypants: true
});

/**
 * Generate a URL-friendly slug from a blog post title
 */
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .replace(/-+/g, '-')      // Replace multiple hyphens with single
        .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
}

/**
 * Transform a GitHub issue into a blog post
 */
export function transformIssueToBlogPost(issue: GitHubIssue): BlogPost {
    const content = issue.body || '';
    const htmlContent = marked.parse(content) as string;

    return {
        id: issue.id,
        number: issue.number,
        title: issue.title,
        content,
        htmlContent,
        slug: generateSlug(issue.title),
        publishedAt: issue.created_at,
        updatedAt: issue.updated_at,
        author: {
            name: issue.user.login,
            avatar: issue.user.avatar_url,
            url: issue.user.html_url
        },
        githubUrl: issue.html_url,
        labels: issue.labels.map(label => label.name)
    };
}

/**
 * Fetch blog posts from GitHub issues with the blog label
 */
export async function fetchBlogPosts(fetchFn: typeof fetch = fetch): Promise<BlogListResponse> {
    const url = `https://api.github.com/repos/${GITHUB_REPO}/issues?labels=${BLOG_LABEL}&state=open&sort=created&direction=desc`;

    try {
        const response = await fetchFn(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Local-Connectivity-Lab-Website'
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const issues: GitHubIssue[] = await response.json();
        const posts = issues.map(transformIssueToBlogPost);

        return {
            posts,
            total: posts.length
        };
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return {
            posts: [],
            total: 0
        };
    }
}

/**
 * Find a blog post by its slug
 */
export async function findBlogPostBySlug(slug: string, fetchFn: typeof fetch = fetch): Promise<BlogPost | null> {
    const { posts } = await fetchBlogPosts(fetchFn);
    return posts.find(post => post.slug === slug) || null;
}