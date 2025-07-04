<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';

    import Wrapper   from '$lib/components/Wrapper.svelte';
    import Panel     from '$lib/components/Panel.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';
    import Button from '$lib/components/Button.svelte';
    import { addBase } from '$lib';

    const detailsList = [
        m['pages.sites.details.list.0'](),
        m['pages.sites.details.list.1'](),
        m['pages.sites.details.list.2']()
    ];

    const eligibilityList = [
        m['pages.sites.eligibility.list.0'](),
        m['pages.sites.eligibility.list.1'](),
        m['pages.sites.eligibility.list.2'](),
        m['pages.sites.eligibility.list.3']()
    ];

    const locations = [
        "garfield",
        "franklin",
        "fcv",
        "occ",
        "skyway",
        "surge"
    ];
</script>

<PageTitle title={m['pages.about.title']()} />

<Wrapper>
    <section>
        <Panel>
            <h2>{m['pages.sites.overview.header']()}</h2>
            <p>{m['pages.sites.overview.paragraphs.0']()}</p>
            <p>{m['pages.sites.overview.paragraphs.1']()}</p>
            <p>{m['pages.sites.overview.paragraphs.2']()}</p>
        </Panel>
    </section>

    <section>
        <Panel type="plain">
            <h2>{m['pages.sites.details.header']()}</h2>
            <p>{m['pages.sites.details.paragraphs.0']()}</p>
            <img
                src={addBase(m['pages.sites.details.img.src']())}
                alt={m['pages.sites.details.img.alt']()}
                class="img-center"
            />
            <p>{m['pages.sites.details.paragraphs.1']()}</p>
            <p>{m['pages.sites.details.paragraphs.2']()}</p>

            <ul>
                {#each detailsList as detail}
                    <li>{detail}</li>
                {/each}
            </ul>
        </Panel>
    </section>

    <section>
        <Panel type="plain">
            <h2>{m['pages.sites.eligibility.header']()}</h2>
            <p>{m['pages.sites.eligibility.paragraphs.0']()}</p>
            <ul>
                {#each eligibilityList as eligibility}
                    <li>{eligibility}</li>
                {/each}
            </ul>
            <p>{@html m['pages.sites.eligibility.paragraphs.1']()}</p>
        </Panel>
    </section>

    <section>
        <Panel>
            <h2>{m['pages.sites.locations.header']()}</h2>
            <h3>{m['pages.sites.locations.subheader']()}</h3>

            <div class="locations">
                {#each locations as location}
                    <div class="location">
                        <img
                            src={addBase(m[`pages.sites.locations.locations.${location}.src`]())}
                            alt={m[`pages.sites.locations.locations.${location}.alt`]()}
                        />

                        <div class="content">
                            <a
                                href={m[`pages.sites.locations.locations.${location}.href`]()}
                                class="header-link"
                            >
                                <h3>{m[`pages.sites.locations.locations.${location}.header`]()}</h3>
                            </a>

                            <p>
                                {m['pages.sites.locations.labels.address']()}
                                {m[`pages.sites.locations.locations.${location}.address`]()}
                            </p>
                            <p>
                                {m['pages.sites.locations.labels.description']()}
                                {m[`pages.sites.locations.locations.${location}.description`]()}
                                {@html m['pages.sites.locations.suffix']({
                                image : m[`pages.sites.locations.locations.${location}.image`](),
                                map : m[`pages.sites.locations.locations.${location}.map`]()
                            })}</p>
                        </div>

                    </div>
                {/each}
            </div>
        </Panel>
    </section>

    <section class="text-center">
        <Panel type="plain">
            <h2>{m['pages.sites.sites.header']()}</h2>
            <p class="row-center">{@html m['pages.sites.sites.paragraphs.0']({
                image : `<img src='https://lh3.googleusercontent.com/rB9Ziqi8m-AMvnUCCzMZdzmP4js_cqNksYuXIDiYgJdYl4pMaTh3FLqJC9_RhnzL4joiymQz-3Ctnsbz4DEWnzAuY_mWH8w2wPTu7ApdcCx6xoBCNpCMNUZ3zffoKgGAUzSEUGYGFQ=w2400' />`
            })}</p>

            <iframe
                class="sites-iframe"
                src={m['pages.sites.sites.iframe.src']()}
                title={m['pages.sites.sites.iframe.title']()}
            ></iframe>

            <p>{m['pages.sites.sites.paragraphs.1']()}</p>

            <Button
                href={m['pages.sites.sites.href']()}
                arrow={true}
            >
                {m['pages.sites.sites.cta']()}
            </Button>
        </Panel>
    </section>
</Wrapper>

<style>
    .img-center {
        margin: 0 auto;
        display: block;
    }

    .locations {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3em 6em;
        margin: 3em 8em 2em;

        @media screen and (width < 1024px) {
            margin: 3em 2em 2em;
            gap: 2em 4em;
        }

        @media screen and (width < 768px) {
            grid-template-columns: 1fr;
            margin: 3em 0 2em;
        }
    }

    .location {
        background-color: #FFFFFF;
        box-shadow: 0 0.3em 2em #0004;

        img {
            width: 100%;
            aspect-ratio: 2;
        }
    }

    .content {
        padding: 1em;

        p {
            margin: 0;
            font-size: 0.9em;
        }
    }

    .header-link {
        color: var(--color-link-header);
        text-decoration: underline;

        h3 {
            margin: 0 0 1em;
            font-size: 1.2em;
            font-weight: normal;
        }
    }

    .sites-iframe {
        display: block;
        width: 1000px;
        aspect-ratio: 2;
        margin: 0 auto;

        max-width: 100%;
    }
</style>