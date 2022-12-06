<script>
	import Carousel from './../../../Carousel.svelte';
	import Image from './../../../Image.svelte';

    const imagePath = "/images/articles/signup-redesign/";

	let finalProd = [
		{
			src: imagePath + 'signup-redesign.png',
			alt: '',
            summary: 'Production version of the signup redesign.',
		},
		{
			src: imagePath + 'pricing-plan.png',
			alt: '',
            summary: 'Credit card entry step of the signup redesign.',
		}
	];

	let designVsProd = [
		{
			src: imagePath + 'new-signup-figma-design.png',
			alt: '',
            summary: 'Mockup from Figma.',
		},
		{
			src: imagePath + 'signup-redesign.png',
			alt: '',
            summary: 'Production version of the signup redesign (for comparison).',
		}
	];
</script>

<Carousel images={finalProd} />

<p>
	Sitting in the backlog of customer complaints was the curious case of questions asking the same
	thing: <em>how do I start my trial?</em>. This was correleated with exit surveys on from customers
	who had not converted to a paid plan, that the free product lacked key features for the customers
	needs. User stories had been written up to address individual pain points during the onboarding
	process but did not address the issue in its entirety.
</p>

<p>
	The onboarding process needed to be addressed as a whole. This signup redesign is the first piece
	of resolving the onboarding puzzle.
</p>

<h4>Background</h4>

<Image image="{imagePath + 'old-signup.png'}" summary='The original signup screen just an account creation form.' />

<p>
	The original onboarding process was pieced together from individual development features. This
	created a disparate experience without any progression from the marketing site and into the
	product. The typical user journey was as follows:
</p>

<ol>
	<li>Users would select their payment plan from the marketing site.</li>
	<li>The marketing site would direct users to create an account in the product.</li>
	<li>The product would refresh and redirect users to a settings page.</li>
	<li>The settings page would scroll key page elements for starting a trial out of view.</li>
	<li>Customers would never see the option to start a trial.</li>
</ol>

<p>From there customers would either contact support, or just abandon the product entirely.</p>

<h4>Designing a Solution</h4>

<Carousel images={designVsProd} />

<p>
	Comparative research into the onboarding process of similar services and partners provided the
	needed groundwork for a signup redesign. Product requirements also dictated a few key parameters:
</p>

<ul>
	<li>A credit card would be required of users to start a trial.</li>
	<li>A product account is required to collect credit card details.</li>
</ul>

<p>
	This is where the new signup process was focused. Create an account, capture a credit card.
	Nothing outside industry norms, but quite the changeup to cutting users loose into a partially
	functional product.
</p>

<p>
	Mockups for this project were lightweight, and a fair amount of design was done in-browser. This
	was done to reach a testable MVP as quickly as possible. This allowed for rapid iterations on the
	functional aspects of the new signup.
</p>

<h4>Post-Launch Plans</h4>

<p>
	A redesigned signup on its own could not solve for all of the onboarding issues that had been
	identified. A dashboard redesign was done in order to address a larger looming issue with the
	product: users were getting stuck on how to setup their product.
</p>

<!-- <Carousel images={imag} />

<Carousel {images} /> -->
