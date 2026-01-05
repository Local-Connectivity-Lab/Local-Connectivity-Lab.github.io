<script lang="ts">
    import { page } from '$app/state';
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
    };

    const {status = 404 as 404 | 500} = page;
</script>

<PageTitle title={errors[status].title} />

<Wrapper>
    <h1>
        {status} {errors[status].title}
    </h1>
    <p>
        {errors[status].description}
    </p>
    <p>
        <a href='/' class="button">
            {errors[status].cta}
        </a>
    </p>
</Wrapper>
