<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { addBase } from '$lib';

    import Wrapper   from '$lib/components/Wrapper.svelte';
    import Button    from '$lib/components/Button.svelte';
    import Panel     from '$lib/components/Panel.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';
    import Socials   from '$lib/components/Socials.svelte';

    const sections = [
        {
            header : m['pages.about.lcl.header'](),
            paragraphs : [
                m['pages.about.lcl.paragraphs.0']()
            ],
            img : {
                src : m['pages.about.lcl.img.src'](),
                alt : m['pages.about.lcl.img.alt']()
            }
        },
        {
            header : m['pages.about.mission.header'](),
            paragraphs : [
                m['pages.about.mission.paragraphs.0']()
            ],
            img : {
                src : m['pages.about.mission.img.src'](),
                alt : m['pages.about.mission.img.alt']()
            }
        },
        {
            header : m['pages.about.vision.header'](),
            paragraphs : [
                m['pages.about.vision.paragraphs.0']()
            ],
            img : {
                src : m['pages.about.vision.img.src'](),
                alt : m['pages.about.vision.img.alt']()
            }
        }
    ];

    const valuesList = [
        m['pages.about.values.list.0'](),
        m['pages.about.values.list.1'](),
        m['pages.about.values.list.2'](),
        m['pages.about.values.list.3'](),
        m['pages.about.values.list.4'](),
        m['pages.about.values.list.5'](),
        m['pages.about.values.list.6'](),
        m['pages.about.values.list.7']()
    ]

</script>

<PageTitle title={m['pages.about.title']()} />

<Wrapper>
    {#each sections as section}
        <section>
            <Panel type="plain">
                <h2>{section.header}</h2>
                {#each section.paragraphs as paragraph}
                    <p>{@html paragraph}</p>
                {/each}
                <img
                    src={addBase(section.img.src)}
                    alt={section.img.alt}
                />
            </Panel>
        </section>
    {/each}

    <section>
        <Panel type="plain">
            <h2>{m['pages.about.values.header']()}</h2>
            <p>{m['pages.about.values.paragraphs.0']()}</p>
            <ul class="values-list">
                {#each valuesList as value}
                    <li>{value}</li>
                {/each}
            </ul>
        </Panel>
    </section>

    <section>
        <Panel>
            <h2>{m['pages.about.sm.header']()}</h2>

            <div class="center">
                <Socials type="dark" size="medium" />

                <Button
                    href={m['pages.about.sm.donate.href']()}
                    arrow={true}
                >
                    {m['pages.about.sm.donate.cta']()}
                </Button>
            </div>
        </Panel>
    </section>
</Wrapper>

<style>
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }
</style>