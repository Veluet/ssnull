<script>
	import ContentCategory from '../ContentCategory.svelte';
    import { pages } from '../../lib/stores/SiteStore';

    import { content } from '../../lib/stores/SiteStore';

    let currentPath = [];
    let currentPageId = '';

    $: currentPath = $page.url.pathname.split('/');
    $: currentPageId = currentPath[currentPath.length - 1];

    $: article = $content.find((x) => x.id === currentPageId);
    $: console.log('page > article', article);
</script>
<svelte:head>
    <title> SSNULL - {article.name} </title>
</svelte:head>

{#each $pages as {id, name}, i}
<div>
<ContentCategory {id} />
</div>
{/each}
