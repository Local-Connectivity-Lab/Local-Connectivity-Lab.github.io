<script>
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
</script>

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
