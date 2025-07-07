<script lang="ts">
    // This file is auto-generated. Do not edit directly.
    // see: ./create-redirects.js

    import { addBase } from '$lib';
    import Wrapper from '$lib/components/Wrapper.svelte';

    if (typeof window !== 'undefined') {
        window.location.href = window.location.href.replace("/ourSites.html", "/our-sites");
    }
</script>

<Wrapper>
    <h1>Redirecting...</h1>
    <p>If you are not redirected automatically, please click <a href={addBase("/our-sites")}>here</a>.</p>
</Wrapper>

<style>
    h1 {
        font-size: 2em;
        font-weight: normal;
        margin-top: 2em;
    }
</style>
