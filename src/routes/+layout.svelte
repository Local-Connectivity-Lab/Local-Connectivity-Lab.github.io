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
	<div>
		<h5>{m['common.address.title']()}</h5>
		<p>{m['common.address.physical']()}</p>

		<a href={m['socials.instagram.href']()}>
			{m['socials.instagram.cta']()}
		</a>
		<a href={m['socials.twitter.href']()}>
			{m['socials.twitter.cta']()}
		</a>
		<a href={m['socials.facebook.href']()}>
			{m['socials.facebook.cta']()}
		</a>
	</div>
	<div>
		<h5>{m['common.mission.title']()}</h5>
		<p>{m['common.mission.desc']()}</p>
	</div>
	<div>
		<a href={m['buttons.discord.href']()}>
			{m['buttons.discord.cta']()}
		</a>
		<a href={m['buttons.mailing_list.href']()}>
			{m['buttons.mailing_list.cta']()}
		</a>
	</div>

	<button onclick={() => setLocale('en')}>en</button>
</div>
