<script lang="ts">
    import { page } from '$app/stores';
    import { addBase } from '$lib';

    import { m } from '$lib/paraglide/messages.js';

    let currentUrl = $state('');
    let showNav = $state(false);

    page.subscribe(($page) => {
        currentUrl = $page.url.pathname;
    });

    const navItems = [
        {
            href: m['common.nav.0.href'](),
            label: m['common.nav.0.label']()
        },
        {
            href: m['common.nav.1.href'](),
            label: m['common.nav.1.label']()
        },
        {
            href: m['common.nav.2.href'](),
            label: m['common.nav.2.label']()
        },
        {
            href: m['common.nav.3.href'](),
            label: m['common.nav.3.label']()
        },
        {
            href: m['common.nav.4.href'](),
            label: m['common.nav.4.label']()
        },
        {
            href: m['common.nav.5.href'](),
            label: m['common.nav.5.label']()
        },
        {
            href: m['common.nav.6.href'](),
            label: m['common.nav.6.label']()
        },
        {
            href: m['common.nav.7.href'](),
            label: m['common.nav.7.label']()
        }
    ];
</script>

<header>
    <a href={addBase('/')} class="logo-link">
        <img src={addBase("/layout/header/logo.min.png")} alt="">
        <h1>{m['common.scn']()}</h1>
    </a>

    <button class="nav-toggle" onclick={(e) => {
        e.preventDefault();

        showNav = !showNav;
    }}>
        <img src={addBase("/layout/nav-hamburger.svg")} alt={m['common.toggle_nav']()}>
    </button>
</header>

<nav>
    <div class="nav-items" class:show-nav={showNav}>
        {#each navItems as {href, label}}
            <a
                href={addBase(href)}
                class="nav-link"
                class:active={href === currentUrl}
                onclick={(e) => {
                    showNav = false; // close nav on click
                }}
            >
                <span>{label}</span>
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
        position: relative;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
            border: none;
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
