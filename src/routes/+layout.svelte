<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

	import '../app.css';

	let { children } = $props();

	const navItems = [
		[
			m["common.nav.0.label"](),
			m["common.nav.0.href"](),
		],
		[
			m["common.nav.1.label"](),
			m["common.nav.1.href"](),
		],
		[
			m["common.nav.2.label"](),
			m["common.nav.2.href"](),
		],
		[
			m["common.nav.3.label"](),
			m["common.nav.3.href"](),
		],
		[
			m["common.nav.4.label"](),
			m["common.nav.4.href"](),
		],
		[
			m["common.nav.5.label"](),
			m["common.nav.5.href"](),
		],
		[
			m["common.nav.6.label"](),
			m["common.nav.6.href"](),
		],
		[
			m["common.nav.7.label"](),
			m["common.nav.7.href"](),
		],

	];
</script>

<h1>{m['common.scn']()}</h1>

<nav>
	{#each navItems as [label, href]}
		<a href={href}>{label}</a>
	{/each}
</nav>



{@render children()}

<div>
	<button onclick={() => setLocale('en')}>en</button>
</div>