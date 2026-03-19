<script lang="ts">
    import { m } from "$lib/paraglide/messages.js";

    let { size = undefined } = $props();

    let cssClass = $state("socials");

    if (size === "medium") {
        cssClass = "socials socials-medium";
    }

    const socials = [
        {
            href: m["socials.instagram.href"](),
            cta: m["socials.instagram.cta"](),
            src: "/layout/socials/instagram.svg"
        },
        {
            href: m["socials.x.href"](),
            cta: m["socials.x.cta"](),
            src: "/layout/socials/x.svg"
        },
        {
            href: m["socials.facebook.href"](),
            cta: m["socials.facebook.cta"](),
            src: "/layout/socials/facebook.svg"
        },
        {
            href: m["socials.bluesky.href"](),
            cta: m["socials.bluesky.cta"](),
            src: "/layout/socials/bluesky.svg"
        }
    ];
</script>

<div class={cssClass}>
    {#each socials as { href, cta, src }}
        <a {href} data-test={`social-${cta.toLowerCase()}`}>
            <img src={src} alt={cta} />
        </a>
    {/each}
</div>

<style>
    .socials {
        margin-top: 1em;
        display: flex;
        gap: 1em;

        img {
            height: 3em;
            aspect-ratio: 1;
        }
    }

    .socials-medium {
        img {
            height: 4em;
        }
    }

    a {
        transition: filter 200ms;

        &:hover {
            filter: brightness(0.8);
        }
    }
</style>
