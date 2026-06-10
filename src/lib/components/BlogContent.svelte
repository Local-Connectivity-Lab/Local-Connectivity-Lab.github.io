<script lang="ts">
    let { htmlContent }: { htmlContent: string } = $props();
</script>

<div class="prose">
    {@html htmlContent}
</div>

<style lang="postcss">
    .prose {
        line-height: 1.7;
        font-size: 1.1rem;

        & :global(h1),
        & :global(h2),
        & :global(h3) {
            margin: 2rem 0 1rem 0;
            font-weight: 600;
            line-height: 1.3;
        }

        & :global(h1) {
            font-size: 2rem;
        }

        & :global(h2) {
            font-size: 1.5rem;
        }

        & :global(h3) {
            font-size: 1.25rem;
        }

        & :global(p) {
            margin: 1rem 0;
        }

        & :global(a) {
            color: var(--color-primary);
            text-decoration: underline;
        }

        & :global(a:hover) {
            text-decoration: none;
        }

        & :global(code) {
            background-color: var(--color-bg-secondary);
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
            font-size: 0.9em;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        }

        & :global(pre) {
            background-color: var(--color-bg-secondary);
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
        }

        & :global(pre code) {
            background-color: transparent;
            padding: 0;
        }

        & :global(strong) {
            font-weight: 600;
        }

        & :global(em) {
            font-style: italic;
        }
    }
</style>