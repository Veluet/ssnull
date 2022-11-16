<script>
	import '../app.scss';
	//import './styles.css';
	import { page } from '$app/stores';
	let currentPath;
	$: currentPath = $page.url.pathname.split('/').filter((x) => x !== '');
	console.log(currentPath);
</script>

<div class="app">
	<div class="the-box-wrapper-1">
		<div class="the-box-wrapper-2">
			<div class="the-box">
				<header>
					{#if currentPath.length > 0}
						<a href="/">
							<h1>SSNULL</h1>
						</a>
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
</div>

<style lang="scss">
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
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.9);
		padding: 1em;
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
		--background-size: .75;
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
		height: calc(795px *  var(--background-size));
		background-image: url('/src/lib/images/top-left-scratches.png');
	}
	.the-box-wrapper-1:after {
		@extend .box-accent;
		top: -26px;
		right: -35px;
		width: calc(365px *  var(--background-size));
		height: calc(644px *  var(--background-size));
		background-image: url('/src/lib/images/top-right-scratches.png');
		background-position: 100% 0;
	}
	.the-box-wrapper-2:before {
		@extend .box-accent;
		bottom: -65px;
		left: -28px;
		width: calc(497px *  var(--background-size));
		height: calc(405px *  var(--background-size));
		background-image: url('/src/lib/images/bottom-left-scratches.png');
		background-position: 0 100%;
	}
	.the-box-wrapper-2:after {
		@extend .box-accent;
		bottom: -35px;
		right: -49px;
		width: calc(508px *  var(--background-size));
		height: calc(272px *  var(--background-size));
		background-image: url('/src/lib/images/bottom-right-scratches.png');
		background-position: 100% 100%;
	}
</style>
