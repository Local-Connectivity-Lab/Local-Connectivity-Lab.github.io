import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';

const redirects = [
    ['/aboutUs.html', "/about-us"],
    ['/ourSites.html', "/our-sites"],
    ['/donate.html', "/donate"]
];

const template =
`<script lang="ts">
    // This file is auto-generated. Do not edit directly.
    // see: ./create-redirects.js

    import { addBase } from '$lib';
    import Wrapper from '$lib/components/Wrapper.svelte';

    if (typeof window !== 'undefined') {
        window.location.href = window.location.href.replace("{from}", "{to}");
    }
</script>

<Wrapper>
    <h1>Redirecting...</h1>
    <p>If you are not redirected automatically, please click <a href={addBase("{to}")}>here</a>.</p>
</Wrapper>

<style>
    h1 {
        font-size: 2em;
        font-weight: normal;
        margin-top: 2em;
    }
</style>
`;

/**
 * @param {string} from - The page to redirect from.
 * @param {string} to - The path to redirect to.
 * @returns {Promise<void>} - A promise that resolves when the file is written.
 */
function createRedirect(from, to) {
    const content = template.replaceAll('{to}', to).replaceAll('{from}', from);
    const filePath = `src/routes${from}/+page.svelte`;

    // Ensure the directory exists
    const dir = filePath.substring(0, filePath.lastIndexOf('/'));

    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }

    return writeFile(filePath, content);
}

for (const [from, to] of redirects) {
    createRedirect(from, to);
}
