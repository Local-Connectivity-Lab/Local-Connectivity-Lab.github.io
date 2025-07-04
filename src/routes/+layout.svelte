<script lang="ts">
    import { page } from '$app/stores';

    import { m } from '$lib/paraglide/messages.js';

    import '../app.css';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    export const prerender = true;
    export const trailingSlash = "always";

    let { children } = $props();
</script>

<Header />

<main>
    {@render children()}
</main>

<Footer/>

<style lang="postcss">

</style>
