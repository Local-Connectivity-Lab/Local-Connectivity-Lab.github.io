<script lang="ts">
    let { href, children, type } = $props();

    let cssClass = $state("button");

    if (type === "small") {
        cssClass = "button button-small";
    }
</script>

<a href={href} class={cssClass}>
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
</style>
