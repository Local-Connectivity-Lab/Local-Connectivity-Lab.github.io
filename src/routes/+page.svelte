<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';

    import Calendar from '$lib/components/Calendar.svelte';
    import Partners from '$lib/components/Partners.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Wrapper  from '$lib/components/Wrapper.svelte';
    import Button   from '$lib/components/Button.svelte';
    import Panel    from '$lib/components/Panel.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';
    import { addBase } from '$lib';

    const overview = [
        m['pages.home.overview.paragraphs.0'](),
        m['pages.home.overview.paragraphs.1'](),
        m['pages.home.overview.paragraphs.2']()
    ];

    const imgs = [
        "/pages/home/carousel1.min.jpg",
        "/pages/home/carousel2.min.jpg",
        "/pages/home/carousel3.min.jpg",
        "/pages/home/carousel4.min.jpg"
    ];

    const buttons = [
        {
            href : m['pages.home.get_involved.volunteer.href'](),
            cta : m['pages.home.get_involved.volunteer.cta']()
        },
        {
            href : m['pages.home.get_involved.connect.href'](),
            cta : m['pages.home.get_involved.connect.cta']()
        }
    ];
</script>

<PageTitle />

<section class="carousel-wrapper">
    <Carousel imgs={imgs} />
</section>


<Wrapper>
    <section class="center">
        <Button
            href={addBase(m['pages.home.hero.href']())}
            type="wide"
            arrow={true}
        >
            {m['pages.home.hero.cta']()}
        </Button>
    </section>

    <section>
        <img
            src={addBase(m['pages.home.building.src']())}
            alt={m['pages.home.building.alt']()}
        />
    </section>

    <section>
        <Panel>
            <h2>
                {m['pages.home.overview.header']()}
            </h2>

            {#each overview as over}
                <p>{@html over}</p>
            {/each}

            <div class="flex-right">
                <Button
                    type="small"
                    href={addBase(m['pages.home.overview.about.href']())}
                    arrow={true}
                >
                    {m['pages.home.overview.about.cta']()}
                </Button>
            </div>
        </Panel>
    </section>

    <section>
        <h2>
            {m['pages.home.get_involved.header']()}
        </h2>

        <div class="button-row">
            {#each buttons as { href, cta }}
                <Button href={addBase(href)} arrow={true}>
                    {cta}
                </Button>
            {/each}
        </div>
    </section>

    <section>
        <Calendar />
    </section>

    <section>
        <Partners />
    </section>
</Wrapper>

<style>
    .carousel-wrapper {
        margin: 0;
    }
    .center {
        display: flex;
        justify-content: center;
    }
    .flex-right {
        display: flex;
        justify-content: flex-end;
    }

    .button-row {
        margin: 2em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2em;

        @media screen and (width >= 1024px) {
            flex-direction: unset;
            gap: 4em;
        }
    }
</style>