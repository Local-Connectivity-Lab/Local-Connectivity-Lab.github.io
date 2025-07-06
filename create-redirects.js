import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';

const redirects = [
    ['/aboutUs.html', "/about-us"],
    ['/ourSites.html', "/our-sites"],
    ['/donate.html', "/donate"]
];

const template =
`// This file is auto-generated. Do not edit directly.
// see: ./create-redirects.js
<script lang="ts">
    if (typeof window !== 'undefined') {
        window.location.href = "{to}";
    }
</script>
`;

/**
 * @param {string} page - The page to redirect from.
 * @param {string} redirect - The path to redirect to.
 * @returns {Promise<void>} - A promise that resolves when the file is written.
 */
function createRedirect(from, to) {
    const content = template.replace('{to}', to);
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
