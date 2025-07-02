<script lang="ts">
    import { page } from '$app/stores';

    import { m } from '$lib/paraglide/messages.js';

    let currentUrl = $state('');

    page.subscribe(($page) => {
        currentUrl = $page.url.pathname;
    });

    const navLength = 8;
</script>

<nav>
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
</nav>

<style>
    nav {
        --nav-border: solid 1px var(--color-nav-border);

        display: block;
        padding: 0.5em 2em;

        a {
            display: inline-block;

            color: var(--color-nav-text);
            text-decoration: none;

            border-right: var(--nav-border);

            &:first-child {
                border-left: var(--nav-border);
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