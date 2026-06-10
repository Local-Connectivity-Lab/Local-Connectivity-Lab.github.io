import { error } from '@sveltejs/kit';
import { findBlogPostBySlug, fetchBlogPosts } from '$lib/blog/api.js';
import type { PageLoad } from './$types.js';

export const prerender = true;

export const load: PageLoad = async ({ params, fetch }) => {
    const post = await findBlogPostBySlug(params.slug, fetch);

    if (!post) {
        throw error(404, 'Blog post not found');
    }

    return {
        post
    };
};

// Generate all possible blog post routes at build time
export async function entries() {
    try {
        const { posts } = await fetchBlogPosts();
        return posts.map(post => ({ slug: post.slug }));
    } catch (err) {
        console.error('Error generating blog post entries:', err);
        return [];
    }
}