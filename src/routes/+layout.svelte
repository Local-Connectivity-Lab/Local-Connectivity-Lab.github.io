<script lang="ts">
    import '../app.css';

    import Header   from '$lib/components/Header.svelte';
    import Footer   from '$lib/components/Footer.svelte';
    import Metatags from '$lib/components/Metatags.svelte';

    let { children } = $props();
</script>

<Metatags />

<Header />

<main>
    {@render children()}
</main>

<Footer/>

<style lang="postcss">

</style>
