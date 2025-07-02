<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

    import Calendar from '$lib/components/Calendar.svelte';
    import Partners from '$lib/components/Partners.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Wrapper from '$lib/components/Wrapper.svelte';
    import Button from '$lib/components/Button.svelte';
    import Panel from '$lib/components/Panel.svelte';

    const imgs = [
        "/carousel1.min.jpg",
        "/carousel2.min.jpg",
        "/carousel3.min.jpg",
        "/carousel4.min.jpg"
    ];
</script>

<Carousel imgs={imgs} />


<Wrapper>
    <Button href={m['pages.home.hero.href']()}>
        {m['pages.home.hero.cta']()}
    </Button>

    <img
        src={m['pages.home.building.src']()}
        alt={m['pages.home.building.alt']()}
    />

    <Panel>
        <h2>
            {m['pages.home.overview.header']()}
        </h2>

        <p>
            {m['pages.home.overview.paragraphs.0']()}
        </p>
        <p>
            {m['pages.home.overview.paragraphs.1']()}
        </p>
        <p>
            {@html m['pages.home.overview.paragraphs.2']()}
        </p>

        <div class="flex-right">
            <Button
                type="small"
                href={m['pages.home.overview.about.href']()}
            >
                {m['pages.home.overview.about.cta']()}
            </Button>
        </div>
    </Panel>

    <h2>
        {m['pages.home.get_involved.header']()}
    </h2>

    <div class="button-row">
        <Button href={m['pages.home.get_involved.volunteer.href']()}>
            {m['pages.home.get_involved.volunteer.cta']()}
        </Button>
        <Button href={m['pages.home.get_involved.connect.href']()}>
            {m['pages.home.get_involved.connect.cta']()}
        </Button>
    </div>

    <Calendar />

    <Partners />
</Wrapper>

<style>
    .push-down {
        margin-top: 1em;
    }

    .flex-right {
        display: flex;
        justify-content: flex-end;
    }

    .button-row {
        margin: 2em 0;
        display: flex;
        justify-content: center;
        gap: 4em;
    }
</style>