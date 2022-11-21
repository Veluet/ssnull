<script>
	import { page } from '$app/stores';
	import { content } from '../../lib/stores/SiteStore';

	let currentPath = [];
	let currentPageId = '';

	$: currentPath = $page.url.pathname.split('/');
	$: currentPageId = currentPath[currentPath.length - 1];

	console.log('content', $content);

	$: article = $content.find((x) => x.id === currentPageId);
	$: console.log('article', article);
</script>

<svelte:head>
	<title>SSNULL - {article.name}</title>
</svelte:head>

{#if typeof article !== 'undefined'}
	<article>
		<div class="margin-bottom-8">
			<h3>{article.name}</h3>
			<p class="summary">{article.summary}</p>
		</div>
		<div class="margin-bottom-8 article-body">
			<slot />
		</div>
	</article>
	<div class="d-flex justify-content-end">
		
		<a href="/" class="back-to-home d-flex justify-content-end align-items-baseline font-size-17">
			<span class="back-to-arrow margin-right-2">&#8592;</span>
			<span>Back to Home</span>
		</a>
	</div>
{/if}

<style>
	h3 {
		font-size: var(--font-size-30);
		color: var(--primary-00);
	}
	.summary {
		color: var(--gray-25);
	}
	:global(.article-body p) {
		font-size: 110%;
		color: var(--text);
	}
	.back-to-home:visited {
		color: var(--blue-50);
	}
	.back-to-arrow {
		font-size: var(--font-size-30);
		font-weight: bold;
		color: var(--black-25);
	}
</style>
