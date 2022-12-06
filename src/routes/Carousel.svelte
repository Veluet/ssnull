<script>
	import { base } from '$app/paths';
	import Image from './Image.svelte';

	export let images;
	let me;

	if (typeof images !== 'undefined' && images.length > 0) {
		images.forEach((element, i) => {
			element.id = i;
			element.prev = i == 0 ? images.length - 1 : i - 1;
			element.next = i == images.length - 1 ? 0 : i + 1;
		});

		me = Math.round(100000 + Math.random() * 900000);
	}
</script>

{#if typeof images !== 'undefined' && images.length > 0}
	<!-- Modified from: https://codepen.io/ancaspatariu/pen/WpQYOP -->
	<div>
		<div class="carousel">
			<ul class="slides">
				{#each images as image (image.id)}
					<input
						type="radio"
						name="{me + '-carousel-radio-buttons'}"
						id={me + '-img-' + image.id}
						class={'carousel-img-' + image.id}
						checked={image.id == 0}
					/>
					<li class="slide-container">
						<div class="slide-image">
							<img src={image.src} alt={image.alt} />
							{#if typeof image.summary !== 'undefined'}
							<p class="summary">{image.summary}</p>
							{/if}
						</div>
						<div class="carousel-controls">
							<label for={me + '-img-' + image.prev} class="prev-slide">
								<span>&lsaquo;</span>
							</label>
							<label for={me + '-img-' + image.next} class="next-slide">
								<span>&rsaquo;</span>
							</label>
						</div>
					</li>
				{/each}
				<div class="carousel-dots">
					{#each images as image (image.id)}
						<label
							for={me + '-img-' + image.id}
							class="carousel-dot {'carousel-img-dot-' + image.id}"
							id={me + '-img-dot-' + image.id}
						/>
					{/each}
				</div>
			</ul>
		</div>
	</div>
{:else}
	<p>There's supposed to be some images here but I forgot to do a thing, my bad.</p>
{/if}

<style lang="scss">
	.carousel {
		margin-left: 15%;
		margin-right: 15%;
		margin-bottom: 2em;
	}

	.carousel {

		--carousel-dots-height: 36px;

	ul.slides {
		display: block;
		position: relative;
		height: 600px;
		margin: 0;
		padding: 0;
		overflow: hidden;
		list-style: none;
	}

	.slides * {
		user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-webkit-touch-callout: none;
	}

	ul.slides input {
		display: none;
	}

	.slide-container {
		display: block;
	}

	.slide-image {
		display: flex;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		opacity: 0;
		transition: all 0.7s ease-in-out;
	}

	.slide-image img {
		width: auto;
		min-width: auto;
		height: 100%;
		border-radius: var(--border-radius);
	}

	.slide-image > .summary {
		position: absolute;
		bottom: var(--carousel-dots-height);
		left: 0;
		right: 0;
		width: 100%;
		text-align: center;
		background: rgba(255, 255, 255, 0.9);
		font-size: 90%;
	}

	.carousel-controls {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		font-size: 100px;
		line-height: 600px;
		color: var(--gray-25);
	}

	.carousel-controls label {
		display: none;
		position: absolute;
		padding: 0 20px;
		opacity: 0;
		transition: opacity 0.2s;
		cursor: pointer;
	}

	.slide-image:hover + .carousel-controls label {
		opacity: 0.5;
	}

	.carousel-controls label:hover {
		opacity: 1;
	}

	.carousel-controls .prev-slide {
		width: 49%;
		text-align: left;
		left: 0;
	}

	.carousel-controls .next-slide {
		width: 49%;
		text-align: right;
		right: 0;
	}

	.carousel-dots {
		position: absolute;
		height: var(--carousel-dots-height);
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		text-align: center;
		background: rgba(255, 255, 255, 0.9);
	}

	.carousel-dots .carousel-dot {
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: var(--black-25);
		opacity: 0.5;
		margin: 10px;
		transition: background 200ms ease-in-out;
	}

	.carousel-dot:hover {
		cursor: pointer;
		background-color: var(--primary-0);
	}

	input:checked + .slide-container .slide-image {
		opacity: 1;
		transform: scale(1);
		transition: opacity 1s ease-in-out;
	}

	input:checked + .slide-container .carousel-controls label {
		display: block;
	}

	input.carousel-img-0:checked ~ .carousel-dots label.carousel-img-dot-0,
	input.carousel-img-1:checked ~ .carousel-dots label.carousel-img-dot-1,
	input.carousel-img-2:checked ~ .carousel-dots label.carousel-img-dot-2,
	input.carousel-img-3:checked ~ .carousel-dots label.carousel-img-dot-3,
	input.carousel-img-4:checked ~ .carousel-dots label.carousel-img-dot-4,
	input.carousel-img-5:checked ~ .carousel-dots label.carousel-img-dot-5,
	input.carousel-img-6:checked ~ .carousel-dots label.carousel-img-dot-6 {
		opacity: 1;
	}

	input:checked + .slide-container .nav label {
		display: block;
	}
}
</style>
