<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

    import Calendar from '$lib/components/Calendar.svelte';
    import Partners from '$lib/components/Partners.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Wrapper from '$lib/components/Wrapper.svelte';
    import Button from '$lib/components/Button.svelte';

    const imgs = [
        "/carousel1.min.jpg",
        "/carousel2.min.jpg",
        "/carousel3.min.jpg",
        "/carousel4.min.jpg"
    ];
</script>

<Carousel imgs={imgs} />


<Wrapper>
    <span class="push-down">
        <Button href={m['pages.home.hero.href']()}>
            {m['pages.home.hero.cta']()}
        </Button>
    </span>
</Wrapper>

about us

get involved

<Calendar />
<Partners />

<style>
    .push-down {
        margin-top: 1em;
    }
</style>