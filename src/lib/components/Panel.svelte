<script lang="ts">
    let { children, type = undefined } = $props();

    let cssClass = $state("panel");

    if (type === "plain") {
        cssClass = "panel panel-plain";
    }
</script>

<div class={cssClass}>
    {@render children()}
</div>

<style>
    .panel {
        padding: 1em 2em;
        border-radius: 1em;
        background-color: var(--color-panel);

        @media screen and (width >= 1024px) {
            padding: 2em 3em;
        }
    }

    .panel-plain {
        background-color: var(--color-panel-plain);
    }
</style>