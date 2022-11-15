<script>
	//import './styles.css';
	import { page } from '$app/stores';
	let currentPath
	$: currentPath = $page.url.pathname.split('/').filter(x => x !== '');
	console.log(currentPath);
</script>

<div class="app">
	<div class="content-wrapper">
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

<style>
	.app {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f0f0f0;
	}
	.content-wrapper {
		border: 2px solid #000;
		border-radius: 3px;
		padding: 2em;
		background: #fff;
	}
</style>
