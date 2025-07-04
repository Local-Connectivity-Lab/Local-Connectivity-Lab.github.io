<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';

    let { title = undefined } = $props();

    const pageTitle = title ? `${title} - ${m['common.scn']()}` : m['common.scn']();
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>
