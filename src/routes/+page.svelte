<script>
	import ContentCategory from './ContentCategory.svelte';
	import { pages } from '../lib/stores/SiteStore.js';
</script>
<svelte:head>
    <title> SSNULL - Steven Soblo </title>
</svelte:head>


<div class="row-margin-8">
	{#each $pages as { id, name }, i}
		<ContentCategory {id} />
	{/each}
</div>
