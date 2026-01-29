<script lang="ts">
    import { page } from '$app/state';

    import { m } from '$lib/paraglide/messages.js';

    import image from '$lib/assets/og-image.jpg';

    const og = {
        title : m['meta.title'](),
        description : m['meta.description'](),
        url : m['meta.url']() + page.url.pathname,
        type : m['meta.type'](),
        image
    };
</script>

<svelte:head>

    <meta name="description" content="{m['meta.description']()}" />

    {#each Object.entries(og) as [key, value]}
        <meta property={`og:${key}`} content={value} />
    {/each}

</svelte:head>
