<script>
	import ContentCategory from '../ContentCategory.svelte';
    import { pages } from '../../lib/stores/SiteStore';
</script>

<svelte:head>
    <title> SSNULL </title>
</svelte:head>

{#each $pages as {id, name}, i}
<div>
<ContentCategory {id} />
</div>
{/each}
