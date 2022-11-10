<script>
	export let id;

	import { pages } from '../lib/stores/SiteStore.js';
	import { content } from '../lib/stores/SiteStore.js';

	let CategoryName = id;

	const page = $pages.find(x => x.id === id);

	const articles = $content.filter(x => x.parentId === id);
</script>
{#if articles.length > 0}
<h3>{page.name}</h3>
	{#each articles as article (article.id)}
			<a href="{article.parentId}/{article.id}">
				{article.name}
			</a>
	{/each}
{/if}
