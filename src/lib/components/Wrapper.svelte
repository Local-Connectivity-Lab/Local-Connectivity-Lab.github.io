<script lang="ts">
    let { children } = $props();
</script>

<div class="wrapper">
    <div class="content">
        {@render children()}
    </div>
</div>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 4%;

        @media screen and (width: 1024px) {
            padding: 0;
        }
    }

    .content {
        max-width: 1400px;
    }
</style>
