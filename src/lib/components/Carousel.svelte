<script lang="ts">
    import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay'
    import { addBase } from '$lib';

  let options = { loop: false }
  let plugins = [Autoplay()]

    const { imgs } = $props();
</script>

<div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}">
    <div class="embla__container">
        {#each imgs as img}
            <div class="embla__slide">
                <img src={addBase(img)} alt="Carousel" />
            </div>
        {/each}
    </div>
</div>

<style>
    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
    }
    .embla__slide {
        flex: 0 0 100%;
        min-width: 0;
    }

    img {
        width: 100%;
    }
</style>
