<script>
	import { base } from '$app/paths';

	export let image;
	export let summary;

</script>

{#if typeof image !== 'undefined'}
	<div class="image">
		<img src={image} alt="" />
		{#if typeof summary !== 'undefined'}
			<p class="summary">{summary}</p>
		{/if}
	</div>
{:else}
	<p>There's supposed to be an image here but I forgot to do a thing, my bad.</p>
{/if}

<style lang="scss">
	.image {
		margin-left: 15%;
		margin-right: 15%;
		margin-bottom: 2em;
	}

	.image > img {
		margin-left: auto;
		margin-right: auto;
		display: block;
		height: 600px;
		width: auto;
		border-radius: var(--border-radius);
		border: 1px solid var(--gray-50);
	}

	.summary {
		text-align: center;
		font-size: 90%;
	}
</style>
