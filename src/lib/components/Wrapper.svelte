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
    }

    .content {
        max-width: 1400px;
    }
</style>
