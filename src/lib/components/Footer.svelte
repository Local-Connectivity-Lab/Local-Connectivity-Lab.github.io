<script>
    import { m } from '$lib/paraglide/messages.js';
    import { setLocale } from '$lib/paraglide/runtime';
    import Button from './Button.svelte';
    import Wrapper from './Wrapper.svelte';

    const socials = [
        {
            href : m['socials.instagram.href'](),
            cta : m['socials.instagram.cta'](),
            src : "/layout/footer/IG_icon_circle.png"
        },
        {
            href : m['socials.twitter.href'](),
            cta : m['socials.twitter.cta'](),
            src : "/layout/footer/twitter_icon_circle.png"
        },
        {
            href : m['socials.facebook.href'](),
            cta : m['socials.facebook.cta'](),
            src : "/layout/footer/facebook_icon_circle.png"
        }
    ];

    const buttons = [
        {
            href : m['buttons.discord.href'](),
            cta : m['buttons.discord.cta']()
        },
        {
            href : m['buttons.mailing_list.href'](),
            cta : m['buttons.mailing_list.cta']()
        }
    ];
</script>

<div class="footer">
    <Wrapper>
        <footer>
            <div>
                <h3>{m['common.address.header']()}</h3>
                <p>{m['common.address.physical']()}</p>
                <p>{m['common.address.email']()}</p>


                <div class="socials">
                    {#each socials as { href, cta, src }}
                        <a {href} class={`social ${cta.toLowerCase()}`}>
                            <img {src} alt={cta} />
                        </a>
                    {/each}
                </div>
            </div>
            <div>
                <h3>{m['common.mission.header']()}</h3>
                <p>{m['common.mission.desc']()}</p>
            </div>
            <div class="ctas">
                {#each buttons as { href, cta}}
                    <div>
                        <Button {href} type="medium">{cta}</Button>
                    </div>
                {/each}
            </div>

            <!-- <button onclick={() => setLocale('en')}>en</button> -->
        </footer>
    </Wrapper>
</div>

<style>
    .footer {
        background-color: var(--color-brand-primary);

        h3,
        p {
            color: var(--color-text2);
        }

        h3 {
            margin: 0 0 0.3em;
        }
        p {
            margin: 0;
        }
    }
    footer {
        padding: 2em 0;
        display: grid;
        grid-template-columns: repeat(2, 3fr) 2fr;
        gap: 2em;
    }

    .socials {
        margin-top: 1em;
        display: flex;
        gap: 1em;

        img {
            height: 3em;
            aspect-ratio: 1;
        }
    }

    .ctas {
        > :global(*) {
            margin-bottom: 1em;
        }
    }

</style>