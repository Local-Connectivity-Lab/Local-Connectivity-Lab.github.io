import { fetchBlogPosts } from '$lib/blog/api.js';
import type { PageLoad } from './$types.js';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
    const blogData = await fetchBlogPosts(fetch);

    return {
        blogs: blogData
    };
};