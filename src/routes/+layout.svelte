<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

	import '../app.css';

	let { children } = $props();

	const navLength = 8;

</script>

<h1>{m['common.scn']()}</h1>

<nav>
	{#each Array(navLength).fill(0) as _, i}
	 	<a href={m[`common.nav.${i}.href`]()}>
			{m[`common.nav.${i}.label`]()}
		</a>
	{/each}
</nav>

{@render children()}

<div>
	<button onclick={() => setLocale('en')}>en</button>
</div>
