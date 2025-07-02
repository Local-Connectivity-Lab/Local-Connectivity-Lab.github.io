<script lang="ts">
	import { page } from '$app/stores';

	import { m }         from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

    import Nav from '$lib/components/Nav.svelte';

	let currentUrl = $state('');

	page.subscribe(($page) => {
		currentUrl = $page.url.pathname;
	});

	import '../app.css';

	let { children } = $props();

	const navLength = 8;
</script>

<header>
	<a href="/" class="logo-link">
		<img src="/logo.min.png" alt="">
		<h1>{m['common.scn']()}</h1>
	</a>
</header>

<Nav />


{@render children()}

<footer>
	<div>
		<h5>{m['common.address.header']()}</h5>
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
		<h5>{m['common.mission.header']()}</h5>
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
</footer>

<style lang="postcss">
	header {
		padding: 0.5em 2em;
		background-color: var(--color-brand-primary);
	}

	.logo-link {
		display: flex;
		align-items: center;
		gap: 0.5em;

		text-decoration: none;

		h1 {
			margin: 0;

			color: white;
			font-size: 2.2em;
			font-weight: 500;
		}
		img {
			height: 4em;
			aspect-ratio: 1 / 1;
			object-fit: contain;
		}
	}

</style>