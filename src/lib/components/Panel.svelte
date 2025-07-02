<script lang="ts">
    let { children } = $props();
</script>

<div class="panel">
    {@render children()}
</div>

<style>
    .panel {
        padding: 2em 3em;
        border-radius: 1em;
        background-color: var(--color-brand-tertiary);
    }
</style>