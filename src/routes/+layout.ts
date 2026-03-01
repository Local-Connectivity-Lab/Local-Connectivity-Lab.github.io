import { browser } from '$app/environment';
import { goto } from '$app/navigation';

if (browser) {
    // Handle index.html redirect on client side
    if (window.location.pathname === '/index.html') {
        goto('/', { replaceState: true });
    }
}

export const prerender = true;
