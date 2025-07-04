<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { addBase } from '$lib';

    let { type = "light", size = undefined} = $props();

    let cssClass = $state("socials");

    if (size === "medium") {
        cssClass = "socials socials-medium";
    }

    const socials = [
        {
            href : m['socials.instagram.href'](),
            cta : m['socials.instagram.cta'](),
            src : {
                light : "/layout/socials/instagram-icon.png",
                dark : "/layout/socials/instagram-icon-dark.png"
            }
        },
        {
            href : m['socials.twitter.href'](),
            cta : m['socials.twitter.cta'](),
            src : {
                light : "/layout/socials/twitter-icon.png",
                dark : "/layout/socials/twitter-icon-dark.png"
            }
        },
        {
            href : m['socials.facebook.href'](),
            cta : m['socials.facebook.cta'](),
            src : {
                light : "/layout/socials/facebook-icon.png",
                dark : "/layout/socials/facebook-icon-dark.png"
            }
        }
    ];
</script>


<div class="{cssClass}">
    {#each socials as { href, cta, src }}
        <a {href}>
            <img src={addBase(src[type])} alt={cta} />
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
