<script lang="ts">
    import '../app.css';

    import Header   from '$lib/components/Header.svelte';
    import Footer   from '$lib/components/Footer.svelte';
    import Metatags from '$lib/components/Metatags.svelte';
    import Analytics from '$lib/components/Analytics.svelte';

    let { children } = $props();
</script>


<Metatags />

<Header />

<main>
    {@render children()}
</main>

<Footer/>

<Analytics />

<style lang="postcss">

</style>
