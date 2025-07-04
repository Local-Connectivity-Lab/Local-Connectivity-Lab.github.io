<script>
    import { m } from '$lib/paraglide/messages.js';
    // import { setLocale } from '$lib/paraglide/runtime';
    import Button from './Button.svelte';
    import Socials from './Socials.svelte';
    import Wrapper from './Wrapper.svelte';

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

                <Socials />
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
            text-align: left;
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
        display: flex;
        flex-direction: column;
        gap: 2em;

        padding: 2em 0;

        @media screen and (width >= 1024px) {
            display: grid;
            grid-template-columns: repeat(2, 3fr) 2fr;
            gap: 2em;
        }
    }

    .ctas {
        > :global(*) {
            margin-bottom: 1em;
        }
    }

</style>