<script lang="ts">
    // This file is auto-generated. Do not edit directly.
    // see: ./create-redirects.js

    import { addBase } from '$lib';
    import Wrapper from '$lib/components/Wrapper.svelte';

</script>

<svelte:head>
    <meta http-equiv="refresh" content="0; url={addBase('/our-sites')}" />
    <title>Redirecting...</title>
</svelte:head>

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
