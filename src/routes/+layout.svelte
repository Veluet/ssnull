<script>
	//import './styles.css';
</script>

<div class="app">
	<div class="content-wrapper">
		<header>
				<h1>SSNULL</h1>
		</header>

		<main>
			<slot />
		</main>

		<footer>
			
		</footer>
	</div>
</div>

<style>
	.app {display: flex; justify-content: center; align-items: center; background: #f0f0f0;}
	.content-wrapper {border: 2px solid #000; border-radius: 3px; padding: 2em; background: #fff;}
</style>
