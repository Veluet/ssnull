<script>
	export let id;

	import { pages } from '../lib/stores/SiteStore.js';
	import { base } from '$app/paths';
	import { content } from '../lib/stores/SiteStore.js';

	let CategoryName = id;

	const page = $pages.find((x) => x.id === id);

	const articles = $content.filter((x) => x.parentId === id);
	const imagePath = "/images/thumbnails/";
</script>

{#if articles.length > 0}
	<div class="margin-bottom-8">
		<h2 class="margin-bottom-2">{page.name}</h2>
		<div class="article-grid">
			{#each articles as article (article.id)}
			<div class="article-block">
				<a href="{base}/articles/{article.parentId}/{article.id}" class="article-link">
					<img src="{imagePath + article.id + '-1x.png'}" srcset="{imagePath + article.id + '-2x.png 2x'}" alt="" class="article-link-img" />
					<span class="article-link-name margin-top-2">{article.name}</span>
				</a>
				<div class="article-summary margin-top-1">{article.summary}</div>
			</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.article-grid {
		display: grid;
		grid-gap: 1.5rem;
		grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
	}
	.article-link {
		text-align: center;
	}
	.article-link-img {
		width: 200px;
		height: 150px;
		border-radius: var(--border-radius);
		margin: 0 auto;
		display: block;
	}
	.article-link-name {
		display: block;
	}

	.article-summary {
		font-size: 90%;
		color: var(--gray-50);
	}
</style>
