<script>
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';

	const source = `# This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`;

	// onMount(async function () {
	// 	const response = await fetch('');
	// 	console.log(response);
	// 	if (response.ok) {
	// 		// if HTTP-status is 200-299
	// 		// get the response body (the method explained below)
	// 		source = await response.text();
	// 	} else {
	// 		alert('HTTP-Error: ' + response.status);
	// 	}
	// });
</script>

<p>{$page.params.slug}</p>
<SvelteMarkdown {source} />
