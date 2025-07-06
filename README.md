# SCN website (operated by LCL)

seattlecommunitynetwork.org

[`A Svelte project`](https://github.com/sveltejs/cli)

## Developing

- install dependencies with `npm install` (or `pnpm install` or `yarn`)
- start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```


## Redirects

No good way to do this with GitHub pages, need to create stub sveltekit pages that do a client side redirect.

See `./create-redirect.js`.


## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
