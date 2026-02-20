import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';

const handleRedirects: Handle = ({ event, resolve }) => {
    const { pathname } = event.url;

    // Define redirect mappings
    const redirectMap: Record<string, string> = {
        '/aboutUs.html': '/about-us',
        '/ourSites.html': '/our-sites'
    };

    // Check if current pathname needs redirecting
    if (redirectMap[pathname]) {
        throw redirect(301, redirectMap[pathname]);
    }

    return resolve(event);
};

const handleParaglide: Handle = ({ event, resolve }) => paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
    });
});

export const handle: Handle = sequence(handleRedirects, handleParaglide);
