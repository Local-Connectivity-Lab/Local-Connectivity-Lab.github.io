<script lang="ts">
    import Wrapper from '$lib/components/Wrapper.svelte';
    import Panel from '$lib/components/Panel.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';
    import Button from '$lib/components/Button.svelte';
    import BlogContent from '$lib/components/BlogContent.svelte';

    import type { PageData } from './$types.js';

    let { data }: { data: PageData } = $props();

    const { post } = data;

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
</script>

<PageTitle title={post.title} />

<Wrapper dataTest="blog-post-page">
    <article data-test="blog-post-{post.slug}">
        <header class="blog-header">
            <Panel>
                <div class="blog-breadcrumb">
                    <Button
                        href="/blogs"
                        type="small"
                        dataTest="blog-back-to-list"
                    >
                        ← Back to Blog
                    </Button>
                </div>

                <h1 class="blog-title">{post.title}</h1>

                <div class="blog-meta">
                    <div class="blog-author">
                        <img
                            src={post.author.avatar}
                            alt="{post.author.name} avatar"
                            width="32"
                            height="32"
                        />
                        <div>
                            <div class="author-name">
                                <a
                                    href={post.author.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {post.author.name}
                                </a>
                            </div>
                            <div class="blog-date">
                                <time datetime={post.publishedAt}>
                                    {formatDate(post.publishedAt)}
                                </time>
                                {#if post.updatedAt !== post.publishedAt}
                                    • Updated {formatDate(post.updatedAt)}
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>

                {#if post.labels.length > 1}
                    <div class="blog-labels">
                        {#each post.labels as label}
                            {#if label !== 'blog'}
                                <span class="label">{label}</span>
                            {/if}
                        {/each}
                    </div>
                {/if}
            </Panel>
        </header>

        <section class="blog-content">
            <Panel>
                <BlogContent htmlContent={post.htmlContent} />
            </Panel>
        </section>

        <footer class="blog-footer">
            <Panel>
                <div class="blog-navigation">
                    <Button
                        href="/blogs"
                        type="small"
                        arrow={true}
                        dataTest="blog-back-footer"
                    >
                        Back to all posts
                    </Button>
                </div>
            </Panel>
        </footer>
    </article>
</Wrapper>

<style lang="postcss">
    .blog-breadcrumb {
        margin-bottom: 1rem;
    }

    .blog-title {
        margin: 0 0 1.5rem 0;
        font-size: 2rem;
        line-height: 1.2;

        @media (min-width: 768px) {
            font-size: 2.5rem;
        }
    }

    .blog-meta {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-border);

        @media (max-width: 767px) {
            flex-direction: column;
            gap: 1rem;
        }
    }

    .blog-author {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .blog-author img {
        border-radius: 50%;
        flex-shrink: 0;
    }

    .author-name {
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .author-name a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .author-name a:hover {
        color: var(--color-primary);
    }

    .blog-date {
        font-size: 0.875rem;
        color: var(--color-text-muted);
    }

    .blog-labels {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: var(--color-bg-secondary);
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--color-text-muted);
    }

    .blog-content {
        margin: 2rem 0;
    }

    .blog-footer {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--color-border);
    }

    .blog-navigation {
        text-align: center;
    }
</style>