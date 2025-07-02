<script lang="ts">
    import { page } from '$app/stores';

    import { m }         from '$lib/paraglide/messages.js';

    import Nav from '$lib/components/Nav.svelte';

    let currentUrl = $state('');

    page.subscribe(($page) => {
        currentUrl = $page.url.pathname;
    });

    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';

    let { children } = $props();

    const navLength = 8;
</script>

<header>
    <a href="/" class="logo-link">
        <img src="/logo.min.png" alt="">
        <h1>{m['common.scn']()}</h1>
    </a>
</header>

<Nav />


{@render children()}

<Footer/>

<style lang="postcss">
    header {
        padding: 0.5em 2em;
        background-color: var(--color-brand-primary);
    }

    .logo-link {
        display: flex;
        align-items: center;
        gap: 0.5em;

        text-decoration: none;

        h1 {
            margin: 0;

            color: white;
            font-size: 2.2em;
            font-weight: 500;
        }
        img {
            height: 4em;
            aspect-ratio: 1 / 1;
            object-fit: contain;
        }
    }
</style>