// place files you want to import through the `$lib` alias in this folder.
import { base } from '$app/paths';
export const addBase = (url: string) => url.indexOf("/") === 0 ? `${base}${url}` : url;
