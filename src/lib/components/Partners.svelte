<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { addBase } from '$lib';
</script>

<h2>
    {m['pages.home.partners.header']()}
</h2>

<p>
    {m['pages.home.partners.paragraphs.0']()}
</p>

<img src={addBase("/pages/home/scn-partner-logos.min.png")} alt={m['pages.home.partners.alt']()} />
