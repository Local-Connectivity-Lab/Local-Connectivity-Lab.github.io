# SCN website (operated by LCL)

Code repo for the https://seattlecommunitynetwork.org website.

This site is built using [SvelteKit](https://svelte.dev/docs/kit/introduction). SvelteKit supports building fully static sites - which is how this site is built. SvelteKit uses NodeJS to run the static site build.

The website is hosted on GitHub pages. See `./.github/workflows/static.yml` for deployment info.


## How to update this website

Any updates require a pull request.

Run the site locally so you can preview your changes, then commit changes to a feature branch, and create a pull request in GitHub.

The changes will then need to be reviewed and merged.

After merging, a GitHub Action (`./.github/workflows/static.yml`) will kick off to build and deploy the site. This should only take 5 mins, after which your changes will be live!


### Local setup

There are 2 options with different dependencies and setup. Read through both and choose which will work best for you (or just use the first one).

Either option will start the NodeJs webserver at `http://localhost:5173`.

**First: clone this repo**

#### 1 - No Container

Good if you already use NodeJs, or are not using VS Code.

1. Install NodeJs
    - See `./nvmrc` for the correct version.
    - Download and install from https://nodejs.org/en/download
    - Or, use a Node version manager (nvm, pnpm etc)
2. Install dependencies
    - `npm ci`
3. Run web site
    - `npm run dev`

#### 2 - Dev Container

Good if you don't like using command line, or you like the stability of a container.

1. Install Docker Desktop
    - https://www.docker.com/products/docker-desktop/
2. Install VS Code.
    - https://code.visualstudio.com/download
3. Install this extension in VS Code
    - "Dev Containers" by Microsoft
4. Open the repo in VS Code
5. Run Command Palette (`ctrl`+`shift`+`p`)
    - Dev Containers: Reopen in Container
    - Wait for the first build to finish


### Update text

All website text is in `./messages/en.json`.

Adding or removing text sections will most certainly require updating a template


### Update templates

The website is built with a bunch of `*.svelte` files. Each file has a section for JS, HTML, and CSS.

Each page of the website starts with a `+page.svelte` template, eg: `./src/routes/+page.svelte` for the homepage, and `./src/routes/about-us/+page.svelte` for the About Us.

There's 1 layout template used for all pages - `./src/routes/+layout.ts`.

There is a variety of reusable components in `./src/lib/components/*.svelte`


## Tests

There are automated tests using Playwright.

- run this the first time, to install Playwright dependencies: `npx playwright install`
- `npm run test` to run tests


## Production build

To create a *local* production version of your app:

1. `npm run build`
1. `npm run preview`
1. open http://localhost:4137


## Redirects

No good way to do this with GitHub pages, so we need to create stub sveltekit pages that do a client side redirect.

See `./create-redirect.js`.
