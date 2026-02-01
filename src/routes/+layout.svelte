<script lang="ts">
    import '../app.css';

    import Header    from '$lib/components/Header.svelte';
    import Footer    from '$lib/components/Footer.svelte';
    import Analytics from '$lib/components/Analytics.svelte';

    let { children } = $props();
</script>

<Header />

<main>
    {@render children()}
</main>

<Footer/>

<Analytics />

<style lang="postcss">

</style>
