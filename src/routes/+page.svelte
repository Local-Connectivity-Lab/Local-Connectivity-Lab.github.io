<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

    import Calendar from '$lib/components/Calendar.svelte';
    import Partners from '$lib/components/Partners.svelte';
    import Carousel from '$lib/components/Carousel.svelte';

    const imgs = [
        "/carousel1.min.jpg",
        "/carousel2.min.jpg",
        "/carousel3.min.jpg",
        "/carousel4.min.jpg"
    ];
</script>

<Carousel imgs={imgs} />

get involved

about us

get involved

<Calendar />
<Partners />
