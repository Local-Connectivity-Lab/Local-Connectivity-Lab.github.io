<script lang="ts">
    let { href, children } = $props();
</script>

<a href={href} class="button">
    {@render children()}
</a>

<style>
    .button {
        display: inline-block;
        padding: 0.5em 1.6em;

        font-size: 1.6em;
        color: white;
        text-decoration: none;
        border-radius: 0.2em;

        background-color: var(--color-brand-primary);

        transition: background-color 200ms;

        &:hover {
            background-color: var(--color-brand-secondary);
        }
    }
</style>
