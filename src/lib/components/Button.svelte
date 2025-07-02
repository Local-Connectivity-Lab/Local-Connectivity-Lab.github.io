<script lang="ts">
    let { href, children, type = null } = $props();

    let cssClass = $state("button");

    if (type === "small") {
        cssClass = "button button-small";
    } else if (type === "medium") {
        cssClass = "button button-medium";
    } else if (type === "wide") {
        cssClass = "button button-wide";
    }
</script>

<a {href} class={cssClass}>
    {@render children()}
</a>

<style>
    .button {
        display: inline-block;
        padding: 0.5em 1.6em;

        font-size: 1.6em;
        color: white;
        text-decoration: none;
        border-radius: 0.2em;

        background-color: var(--color-brand-primary);

        transition: background-color 200ms;

        &:hover {
            background-color: var(--color-brand-primary-2);
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
</style>
