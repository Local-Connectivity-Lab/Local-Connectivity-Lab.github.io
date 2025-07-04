<script lang="ts">
    import { addBase } from '$lib/index.ts';

    let { href, children, type = null, arrow = null } = $props();

    let cssClass = $state("button");

    if (type === "small") {
        cssClass = "button button-small";
    } else if (type === "medium") {
        cssClass = "button button-medium";
    } else if (type === "wide") {
        cssClass = "button button-wide";
    } else if (type === "donate") {
        cssClass = "button button-donate";
    }
</script>

<a href={addBase(href)} class={cssClass}>
    {@render children()}
    {#if arrow}
        →
    {/if}
</a>

<style>
    .button {
        display: inline-block;
        padding: 0.5em 1.6em;

        font-size: 1.6em;
        color: white;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;

        border-radius: 0.2em;
        background-color: var(--color-brand-primary);

        transition: background-color 200ms;

        &:hover {
            background-color: var(--color-brand-primary-2);
        }

        @media screen and (width < 1024px) {
            font-size: 1.4em;
            white-space: normal;
        }
    }

    .button-small {
        font-size: 1em;
        border-radius: 2em;
    }

    .button-medium {
        font-size: 1em;
        padding: 0.6em 1.6em;
        filter: brightness(2);
    }

    .button-wide {
        padding: 0.6em 4em;
    }

    .button-donate {
        border-radius: 3em;
        font-size: 1.8em;
        font-weight: bold;
    }
</style>
