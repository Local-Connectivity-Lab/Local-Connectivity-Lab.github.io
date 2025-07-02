<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
</script>

<h2>
    {m['pages.home.events.header']()}
</h2>

<iframe
    title={m['pages.home.events.header']()}
    src={m['pages.home.events.iframe']()}
    frameborder="0"
></iframe>


<style>
    iframe {
        width: 100%;
        aspect-ratio: 2;
    }
</style>