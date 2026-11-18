<script>
	import { base } from '$app/paths';

	export let image;
	export let summary;

	// state for image popup modal
	let isExpanded = false;

	// func to toggle state when user clicks
	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	/** @param {KeyboardEvent} e */
	function handleKeydown(e) {
		if (e.key === 'Enter') toggleExpand();
	}

	/** @param {KeyboardEvent} e */
	function handleModalKeydown(e) {
		if (e.key === 'Escape') toggleExpand();
	}

</script>

{#if typeof image !== 'undefined'}

	<div class="image">
		<!-- onClick event -->
		<img 
			src={image} 
			alt=""
			on:click={toggleExpand}
			on:keydown={handleKeydown}
			role='button'
			tabindex='0'
		/>

		{#if typeof summary !== 'undefined'}
			<p class="summary">{summary}</p>
		{/if}
	</div>

{:else}
	<p>There's supposed to be an image here but I forgot to do a thing, my bad.</p>
{/if}

<!-- Image Modal Overlay -->
{#if isExpanded}
	<div
		class="modal"
		on:click={toggleExpand}
		on:keydown={handleModalKeydown}
		role="button"
		tabindex="0"
	>
		<img src={image} alt="" />
	</div>
{/if}

<style lang="scss">
	.image {
		margin-left: 15%;
		margin-right: 15%;
		margin-bottom: 2em;
		cursor: pointer;
	}

	.image > img {
		margin-left: auto;
		margin-right: auto;
		display: block;
		height: auto;
		width: auto;
		border-radius: var(--border-radius);
		border: 1px solid var(--gray-50);
	}

	.summary {
		text-align: center;
		font-size: 90%;
	}
	/* Optional: Slight fade effect on hover to indicate it's interactive */
	.image > img:hover {
		opacity: 0.9; 
	}
	/* Lightbox Styles */
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.85); /* Dark semi-transparent background */
		z-index: 9999999; /* Make sure it sits on top of everything else */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: zoom-out; /* Changes cursor to indicate clicking will shrink it */
		backdrop-filter: blur(4px); /* Optional: blurs the background behind the image */
	}

	.modal > img {
		max-width: 95vw; /* Prevents the image from touching the absolute edges of the screen */
		max-height: 95vh; /* Ensures the entire image fits on the screen */
		object-fit: contain; /* Maintains aspect ratio */
		border-radius: var(--border-radius);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		cursor: default; /* Keeps the cursor normal when hovering over the image itself */
	}
</style>
