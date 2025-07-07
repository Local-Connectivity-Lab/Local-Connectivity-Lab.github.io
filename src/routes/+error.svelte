<script lang="ts">
	import { page } from '$app/state';

    import { addBase } from '$lib';

    import { m }     from '$lib/paraglide/messages.js';
    import Wrapper   from '$lib/components/Wrapper.svelte';
    import PageTitle from '$lib/components/Page-Title.svelte';

    // written out instead of programmatically to avoid blowing up tree-shaking
    const errors = {
        404 : {
            title : m['pages.error.404.title'](),
            description : m['pages.error.404.description'](),
            cta : m['pages.error.404.cta']()
        },
        500 : {
            title : m['pages.error.500.title'](),
            description : m['pages.error.500.description'](),
            cta : m['pages.error.500.cta']()
        }
    }
</script>

<PageTitle title={errors[page.status].title} />

<Wrapper>
    <h1>
        {page.status} {errors[page.status].title}
    </h1>
    <p>
        {errors[page.status].description}
    </p>
    <p>
        <a href={addBase('/')} class="button">
            {errors[page.status].cta}
        </a>
    </p>
</Wrapper>
