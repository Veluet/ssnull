<script>
	import ContentCategory from '../ContentCategory.svelte';
    import { pages } from '../../lib/stores/SiteStore';
</script>

{#each $pages as {id, name}, i}
<div>
<ContentCategory {id} />
</div>
{/each}
