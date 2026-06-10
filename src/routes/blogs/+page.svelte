<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';

    import Wrapper from '$lib/components/Wrapper.svelte';
    import Panel from '$lib/components/Panel.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';
    import BlogCard from '$lib/components/BlogCard.svelte';

    import type { PageData } from './$types.js';

    let { data }: { data: PageData } = $props();
</script>

<PageTitle title="Blog" />

<Wrapper dataTest="blogs-page">

    <h1>Blog</h1>

    <section data-test="blogs-list">
        {#if data.blogs.posts.length > 0}
            <div class="blog-grid">
                {#each data.blogs.posts as post}
                    <BlogCard {post} />
                {/each}
            </div>
        {:else}
            <Panel>
                <p>No blog posts found. Check back soon for updates!</p>
            </Panel>
        {/if}
    </section>
</Wrapper>

<style lang="postcss">
    .blog-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>