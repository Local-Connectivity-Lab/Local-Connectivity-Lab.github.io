<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    import { PUBLIC_GOOGLE_ANALYTICS_ID } from "$env/static/public";

    import { m } from '$lib/paraglide/messages.js';

    import Button from "./Button.svelte";

    let showBanner = $state(false);

    onMount(() => {
        const consentStatus = localStorage.getItem("consent_status");

        if (consentStatus === null) {
            showBanner = true;
        } else if (consentStatus === "granted") {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
            });
        }
    });

    function handleAccept() {
        showBanner = false;
        localStorage.setItem("consent_status", "granted");

        window.gtag("consent", "update", {
            analytics_storage: "granted",
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
        });
    }

    function handleDeny() {
        showBanner = false;
        localStorage.setItem("consent_status", "denied");
    }

    export function reopenBanner() {
        showBanner = true;
        localStorage.removeItem("consent_status");
    }
</script>

<svelte:head>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag("consent", "default", {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
        });
    </script>

    <script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ANALYTICS_ID}`}></script>
    <script>
        gtag("js", new Date());
        gtag("config", "{PUBLIC_GOOGLE_ANALYTICS_ID}");
    </script>
</svelte:head>

{#if showBanner}
    <div transition:fly="{{ x: 20, duration: 300 }}" class="banner">
        <p>
            {@html m["cookieBanner.message"]() }
        </p>

        <div class="buttons">
            <Button type="medium" onclick={handleAccept}>{ m["cookieBanner.accept"]() }</Button>
            <Button type="medium" onclick={handleDeny}>{ m["cookieBanner.deny"]() }</Button>
        </div>
    </div>
{/if}

<style lang="postcss">
    .banner {
        position: fixed;
        bottom: 1em;
        right: 0;
        width: 370px;

        background-color: #fff;

        padding: 1rem;

        border: solid 1px #ccc;
        border-right-width:0;
        border-top-left-radius: 0.6em;
        border-bottom-left-radius: 0.6em;
        box-shadow: 0 0 1em #0004;

        p {
            margin: 0 0 1em;
            font-size: 1em;
        }
    }

    .buttons {
        display: flex;
        gap: 0.5em;
    }
</style>
