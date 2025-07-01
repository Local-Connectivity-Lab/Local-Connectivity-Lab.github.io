<script lang="ts">
	import { page } from '$app/stores';

	import { m }         from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

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

<nav>
	{#each Array(navLength).fill(0) as _, i}
		<a
			href={m[`common.nav.${i}.href`]()}
			class="nav-link"
			class:active={m[`common.nav.${i}.href`]() === currentUrl}
		>
			<span>
				{m[`common.nav.${i}.label`]()}
			</span>
		</a>
	{/each}
</nav>

{currentUrl}

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


	nav {
		--nav-border: solid 1px var(--color-nav-border);

		display: block;
		padding: 0.5em 2em;

		border-left: var(--nav-border);
		border-right: var(--nav-border);

		a {
			display: inline-block;

			color: var(--color-nav-text);
			text-decoration: none;

			border-right: var(--nav-border);

			&:first-child {
				border-left: var(--nav-border);
			}

			&:hover span {
				padding: 0.5em 2em;
				margin: 0;
				text-shadow: 0 0 1px var(--color-nav-text);

				background-color: var(--color-nav-background);
			}

			&.active span {
				background-color: var(--color-nav-background);
			}


		}

		span {
			display: inline-block;
			padding: 0.5em 1em;
			margin: 0 1em;

			transition: margin 200ms, padding 200ms;
		}
	}

</style>