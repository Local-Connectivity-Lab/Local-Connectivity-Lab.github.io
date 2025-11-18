# SCN website (operated by LCL)

Code repo for the seattlecommunitynetwork.org website.

This site is built using [SvelteKit](https://svelte.dev/docs/kit/introduction). SvelteKit supports building fully static sites - which is how this site is built. SvelteKit uses NodeJS to run the static site build.

The website is hosted on GitHub pages. See `./.github/workflows/static.yml` for deployment info.


## How to update this website

You'll want to run the site locally so you can preview your changes. It's fairly simple to setup if you have any programming experience.

Make your changes and confirm them in your locally running site. Commit change to a feature Branch, and create a pull request in GitHub.

The changes will then need to be reviewed and merged. After merging, a GitHub Action will kick off to build and deploy the site. This should only take 5 mins, after which your changes will be live!


### Local setup

**Install NodeJS** - two options:

1. Download and install NodeJS https://nodejs.org/en/download  
See `./.nvmrc` for the version of NodeJS to install
1. Use NVM https://github.com/nvm-sh/nvm

**Setup**

1. Clone the repo
1. Using NVM?
    1. `nvm install` to install the correct NodeJS version
    1. `nvm use` to use the installed NodeJS version
1. Install dependencies with `npm install`
1. Start a development server `npm run dev`

Open your browser to http://localhost:5173


## Tests

There are automated tests using Playwright.

- run this the first time, to install Playwright dependencies: `npx playwright install`
- `npm run test` to run tests


### Update text

All website text is in `./messages/en.json`.

Adding or removing text sections will most certainly require updating a template


### Update templates

The website is built with a bunch of `*.svelte` files. Each file has a section for JS, HTML, and CSS.

Each page of the website starts with a `+page.svelte` template, eg: `./src/routes/+page.svelte` for the homepage, and `./src/routes/about-us/+page.svelte` for the About Us.

There's 1 layout template used for all pages - `./src/routes/+layout.ts`.

There is a variety of reusable components in `./src/lib/components/*.svelte`


## Production Build

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


## Redirects

No good way to do this with GitHub pages, so we need to create stub sveltekit pages that do a client side redirect.

See `./create-redirect.js`.
