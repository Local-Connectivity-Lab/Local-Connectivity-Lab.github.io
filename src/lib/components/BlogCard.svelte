<script lang="ts">
    import Panel from '$lib/components/Panel.svelte';
    import Button from '$lib/components/Button.svelte';

    import type { BlogPost } from '$lib/blog/types.js';

    let { post }: { post: BlogPost } = $props();

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function truncateContent(content: string, maxLength = 300) {
        // Remove YouTube embeds and other media
        let cleanContent = content
            // Remove YouTube URLs (various formats)
            .replace(/https?:\/\/(www\.)?(youtube\.com\/(embed\/|watch\?v=)|youtu\.be\/)[^\s\n\r\])]*/g, '')
            // Remove other video embeds
            .replace(/https?:\/\/(www\.)?(vimeo\.com|dailymotion\.com|twitch\.tv)[^\s\n\r\])]*/g, '')
            // Remove image markdown
            .replace(/!\[.*?\]\(.*?\)/g, '')
            // Remove HTML img tags
            .replace(/<img[^>]*>/g, '')
            // Remove HTML iframe tags (embeds)
            .replace(/<iframe[^>]*>.*?<\/iframe>/gs, '')
            // Remove HTML video/audio tags
            .replace(/<(video|audio)[^>]*>.*?<\/(video|audio)>/gs, '')
            // Remove code blocks
            .replace(/```[\s\S]*?```/g, '')
            // Remove inline code
            .replace(/`[^`]*`/g, '')
            // Remove markdown links but keep text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // Remove extra whitespace and line breaks
            .replace(/\s+/g, ' ')
            .trim();

        if (cleanContent.length <= maxLength) {
            return cleanContent;
        }

        return cleanContent.substring(0, maxLength) + '...';
    }
</script>

<article class="blog-card" data-test="blog-post-{post.slug}">
    <Panel>
        <h2 class="blog-title">
            <a href="/blogs/{post.slug}" data-test="blog-link-{post.slug}">
                {post.title}
            </a>
        </h2>

        <div class="blog-meta">
            <div class="blog-author">
                <img
                    src={post.author.avatar}
                    alt="{post.author.name} avatar"
                    width="24"
                    height="24"
                />
                <span>{post.author.name}</span>
            </div>

            <time datetime={post.publishedAt}>
                {formatDate(post.publishedAt)}
            </time>
        </div>

        <div class="blog-content">
            {truncateContent(post.content)}
        </div>

        {#if post.labels.length > 0}
            <div class="blog-labels">
                {#each post.labels as label}
                    {#if label !== 'blog'}
                        <span class="label">{label}</span>
                    {/if}
                {/each}
            </div>
        {/if}

        <a
            href="/blogs/{post.slug}"
            class="button small"
            data-test="blog-read-more-{post.slug}"
        >
            Read more
        </a>
    </Panel>
</article>

<style lang="postcss">
    .blog-card {
        height: 100%;
    }

    .blog-meta {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: var(--color-text-muted);
    }

    .blog-author {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .blog-author img {
        border-radius: 50%;
    }

    .blog-title {
        text-align: left;
        font-size: 1.25rem;

        & a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s ease;
        }
    }



    .blog-content {
        margin-bottom: 1rem;
        line-height: 1.6;
        color: var(--color-text-secondary);
    }

    .blog-labels {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .label {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        background-color: var(--color-bg-secondary);
        border-radius: 0.25rem;
        font-size: 0.75rem;
        color: var(--color-text-muted);
    }

</style>