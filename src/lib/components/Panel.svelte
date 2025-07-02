<script lang="ts">
    let { children } = $props();
</script>

<div class="panel">
    {@render children()}
</div>

<style>
    .panel {
        padding: 1em 2em;
        border-radius: 1em;
        background-color: var(--color-brand-tertiary);

        @media screen and (width >= 1024px) {
            padding: 2em 3em;
        }
    }
</style>