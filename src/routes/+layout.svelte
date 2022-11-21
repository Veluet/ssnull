<script>
	import '../app.scss';
	//import './styles.css';
	import { page } from '$app/stores';
	import { pages } from '../lib/stores/SiteStore.js';
	// console.log('pages', $pages);
	import { base } from '$app/paths';

	let currentPath = [];
	let section = '';
	$: currentPath = $page.url.pathname.split('/').filter((x) => x !== '');
	// $: console.log('currentPath', currentPath);

	$: section = currentPath[1] ? $pages.find((x) => x.id === currentPath[1]).name : '';
	// $: console.log('section', section);

	const year = Number(new Date().getFullYear()) >= 2022 ? new Date().getFullYear() : 2022;
</script>

<div class="app">
	<div class="author d-flex justify-content-end">
		<p>Steven Soblo {year}</p>
	</div>
	<div class="the-box-wrapper-1">
		<div class="the-box-wrapper-2">
			<div class="the-box">
				<header>
					{#if currentPath.length > 0}
						<div class="d-flex align-items-center col-margin-2">
							<a href="{base}/">
								<h1>SSNULL</h1>
							</a>
							<h2 class="d-flex align-items-center col-margin-1">
								<span aria-hidden="true" class="font-size-30 bottom-1">&gt;</span>
								<span>{section}</span>
							</h2>
						</div>
					{:else}
						<h1>SSNULL</h1>
					{/if}
				</header>

				<main>
					<slot />
				</main>

				<footer />
			</div>
		</div>
	</div>
	{#if currentPath.length > 0}
	<div class="author d-flex justify-content-end">
		<p>Steven Soblo {year}</p>
	</div>
	{/if}
</div>

<style lang="scss">
	.author {
		margin: 0;
	}
	.author > p {
		position: relative;
		z-index: 3;
		background: var(--white-opacity-75);
		border-radius: var(--border-radius);
		padding: 2px;
	}
	header {
		border-bottom: 2px solid var(--black-0);
		margin-bottom: 2rem;
	}
	a > h1 {
		transition: color 100ms ease-in-out;
	}
	a:link > h1,
	a:visited > h1 {
		color: var(--primary-25);
	}
	a:hover > h1 {
		color: var(--blue-75);
	}
	a:active > h1 {
		color: var(--blue-25);
	}

	.app {
		position: relative;
		padding: 4em 4em 22em;
		background-position: 0 100%;
		background-image: url('/src/lib/images/bird.png');
		background-repeat: no-repeat;
		background-size: 930px auto;
		min-height: 100%;
	}
	.the-box {
		position: relative;
		z-index: 2;
		border: 2px solid #000;
		border-radius: var(--border-radius);
		background: rgba(255, 255, 255, 0.9); // Purposely not doing --white-opacity-90;
		padding: 2rem;
		min-height: 260px; // Prevents position issue with bird background.
	}

	// X-Small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {
		.app {
			background-size: 700px auto;
			padding: 1.5em 1.5em 20em;
		}
		.the-box-wrapper-1:before,
		.the-box-wrapper-1:after,
		.the-box-wrapper-2:before,
		.the-box-wrapper-2:after {
			background-size: 50% !important;
		}
		.app {
			.the-box-wrapper-1:before {
				top: -17px;
				left: -52px;
			}
			.the-box-wrapper-1:after {
				top: -17px;
				right: -14px;
			}
			.the-box-wrapper-2:before {
				bottom: -45px;
				left: -20px;
			}
			.the-box-wrapper-2:after {
				bottom: -23px;
				right: -31px;
			}
		}
	}

	// Now for the accents around the box
	.the-box-wrapper-1,
	.the-box-wrapper-2 {
		position: relative;
		width: 100%;
	}
	.box-accent {
		content: '';
		z-index: 1;
		position: absolute;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.app {
		--background-size: 0.75;
	}

	/* 
		What makes this layout of this site insanity mode is these 4 absolute positioned
		backgrounds that skirt each corner of the content frame.  The height on them is quite
		large, which can push a height past <body>.
	*/
	.the-box-wrapper-1:before {
		@extend .box-accent;
		top: -25px;
		left: -81px;
		width: calc(426px * var(--background-size));
		height: calc(795px * var(--background-size));
		background-image: url('/src/lib/images/top-left-scratches.png');
	}
	.the-box-wrapper-1:after {
		@extend .box-accent;
		top: -26px;
		right: -35px;
		width: calc(365px * var(--background-size));
		height: calc(644px * var(--background-size));
		background-image: url('/src/lib/images/top-right-scratches.png');
		background-position: 100% 0;
	}
	.the-box-wrapper-2:before {
		@extend .box-accent;
		bottom: -65px;
		left: -28px;
		width: calc(497px * var(--background-size));
		height: calc(405px * var(--background-size));
		background-image: url('/src/lib/images/bottom-left-scratches.png');
		background-position: 0 100%;
	}
	.the-box-wrapper-2:after {
		@extend .box-accent;
		bottom: -35px;
		right: -49px;
		width: calc(508px * var(--background-size));
		height: calc(272px * var(--background-size));
		background-image: url('/src/lib/images/bottom-right-scratches.png');
		background-position: 100% 100%;
	}
</style>
