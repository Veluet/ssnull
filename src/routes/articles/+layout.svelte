<script>
	import { page } from '$app/stores';
	const currentPath = $page.url.pathname.split('/');
	const currentPageId = currentPath[currentPath.length - 1];
</script>

<article>
	<h2>{currentPageId}</h2>
	<slot />
</article>

<style>
</style>
