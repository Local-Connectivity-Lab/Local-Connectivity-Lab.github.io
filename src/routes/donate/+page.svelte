<script lang="ts">
    import { base } from '$app/paths';

    import { m } from '$lib/paraglide/messages.js';
    import { addBase } from '$lib';

    import Button    from '$lib/components/Button.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';
    import Wrapper   from '$lib/components/Wrapper.svelte';

    const buttons = [
        {
            href : "https://www.gofundme.com/f/seattle-community-network-internet-access-for-all",
            cta : "GoFundMe"
        },
        {
            href : "https://seattlecommunitynetwork.square.site",
            cta : "Square"
        }
    ];

</script>

<PageTitle title={m['pages.donate.title']()} />

<div class="wave" style="--wave-url: url({`${base}/pages/donate/upsidedown-wave.min.png`})">
    <Wrapper>
        <section class="text-center">
            <h1>{m['pages.donate.header']()}</h1>
            <p>{m['pages.donate.paragraphs.0']()}</p>

            <div class="buttons">
                <!-- copied from existing site -->
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="lcl@seattlecommunitynetwork.org" />
                    <input type="hidden" name="item_name" value="Donations / Fundraising" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <button class="paypal-button">
                        <!--<img id = "paypal-graphic" src = "assets/paypal button.png" alt = "paypal button">-->
                        <input type="image" src={addBase("/layout/paypal-button.png")} name="submit" title="Paypal donations are made to lcl@seattlecommunitynetwork.org." alt="Donate with PayPal button" />
                    </button>
                    <img alt="" src={addBase("https://www.paypal.com/en_US/i/scr/pixel.gif")} width="1" height="1" />
                </form>

                {#each buttons as { href, cta }}
                    <Button {href} type="donate">{cta}</Button>
                {/each}
            </div>
        </section>
    </Wrapper>
</div>

<style>
    h1 {
        margin-bottom: 0;
    }
    p {
        font-size: 2em;
        margin-top: 0.4em;
    }
    .wave {
        --wave-offset: 50px;
        --gradient-offset: calc(var(--wave-offset) + 5px);
        height: 100%;
        padding-top: 100px;
        background:
            var(--wave-url) no-repeat center var(--wave-offset)/100% auto,
            linear-gradient(white var(--gradient-offset), var(--color-panel) var(--gradient-offset));

        @media screen and (width >= 1024px) {
            padding-top: 200px;
            background: var(--color-panel) var(--wave-url) repeat-x center 0;
        }
    }

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        margin-top: 2em;
    }

    .paypal-button {
        padding: 0.5em 2em 0.2em;
        border: none;
        border-radius: 3em;
        background: white;
    }
</style>
