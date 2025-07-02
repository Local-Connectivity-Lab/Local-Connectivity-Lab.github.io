<script lang="ts">
    import { page } from '$app/stores';

    import { m } from '$lib/paraglide/messages.js';
    // import { desktop } from '$lib/syles/breakpoints.ts'; // todo: how to use this in

    let currentUrl = $state('');
    let showNav = $state(false);

    page.subscribe(($page) => {
        currentUrl = $page.url.pathname;
    });

    const navLength = 8;
</script>

<header>
    <a href="/" class="logo-link">
        <img src="/layout/header/logo.min.png" alt="">
        <h1>{m['common.scn']()}</h1>
    </a>

    <button class="nav-toggle" onclick={(e) => {
        e.preventDefault(); // todo: the correct svelte5  way to preventDefault

        showNav = !showNav;
    }}>
        <img src="/layout/nav-hamburger.svg" alt={m['common.toggle_nav']()}>
    </button>
</header>

<nav>
    <div class="nav-items" class:show-nav={showNav}>
        {#each Array(navLength).fill(0) as _, i}
            <a
                href={m[`common.nav.${i}.href`]()}
                class="nav-link"
                class:active={m[`common.nav.${i}.href`]() === currentUrl}
            >
                <span>
                    {m[`common.nav.${i}.label`]()}
                </span>
            </a>
        {/each}
    </div>
</nav>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            font-size: 1.6em;
            font-weight: 500;

            @media screen and (width >= 1024px) {
                font-size: 2.2em;
            }
        }
        img {
            height: 4em;
            aspect-ratio: 1 / 1;
            object-fit: contain;
        }
    }

    nav {
        --nav-border: solid 1px var(--color-nav-border);

        display: block;

        @media screen and (width >= 1024px) {
            padding: 0.5em 2em;
        }
    }

    .nav-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3em;
        aspect-ratio: 1;
        padding: 0.2em;

        @media screen and (width >= 1024px) {
            display: none;
        }
    }

    .nav-items {
        display: none;
        padding: 1em 0.5em;
        border: var(--nav-border);

        &.show-nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            z-index: 1; /* stack over carousel */

            background: white;
        }

        @media screen and (width >= 1024px) {
            display: inline-block;
            padding: 0;
            position: unset;
            background: unset;
        }

        a {
            display: inline-block;

            color: var(--color-nav-text);
            text-decoration: none;

            @media screen and (width >= 1024px) {
                border-right: var(--nav-border);

                &:first-child {
                    border-left: var(--nav-border);
                }
            }

            &:hover span {
                padding: 0.5em 2em;
                margin: 0;
                text-shadow: 0 0 1px var(--color-nav-text);

                background-color: var(--color-nav-background);
            }

            &.active span {
                background-color: var(--color-nav-background);
            }
        }

        span {
            display: inline-block;
            padding: 0.5em 1em;
            margin: 0 1em;

            transition: margin 200ms, padding 200ms;
        }
    }
</style>
