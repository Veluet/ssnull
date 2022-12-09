<script>
	import HelperExampleCase from './HelperExampleCase.svelte';
    import HelperLayoutExample from './HelperLayoutExample.svelte';
	import ExampleElement from './ExampleElement.svelte';
	import Prism from 'svelte-prism';
	import HolyGrail from './HolyGrail.svelte';
	const year = Number(new Date().getFullYear()) >= 2022 ? new Date().getFullYear() : 2022;
</script>

<p>
	The HAL system of helpers, appearance and layout came as an idea based on <a
		href="http://smacss.com/">SMACSS</a
	>. It came out of the need to develop front end designs quickly without needing to continually add
	new styles to an ever growing stylesheet.
</p>

<p>There are three pieces to this system:</p>

<ul>
	<li>Leverage the use of helper classes on elements for styling.</li>
	<li>Seperate the appearance of an element from its layout.</li>
	<li>Easily memorizable and repeatable code for front end developers.</li>
</ul>

<h4>A System for Front End Developers</h4>

<p>
	This part isn't in the HAL acronym, but making your CSS framework easy to work with is the most
	important takeaway of the system.
</p>

<p>
	HAL keeps us out of our stylesheets. The only reason we edit those stylesheets is to either add
	additional helpers, or tweak existing styles. Because of this, HAL really demands the usage of
	HTML Components, like what you would see in frameworks like Vue and Svelte.
</p>

<p>HAL still has global stylesheets, and I suggest organizing these stylesheets under SMACSS guidelines.</p>

<p>
	<strong>Design elements that need a specific class or HTML structure must be a component.</strong>
</p>
<p>
	HAL deviates from SMACSS in that is does not like modules of CSS in stylesheets. In the HAL system
	we want to avoid needing to memorize abstract, arbitrary or semantic class names. You should never
	need to remember that `<code>&lt;input type="button"&gt;</code>` needs to have a class combination
	of `<code>btn btn-small btn-primary</code>`.
</p>

<p>
	By using components we can remove the human error element from styling. It's frightently easy even
	for front end developers to forget a particular class already exists and create duplicate a
	selector as a result. It also reduces the amount of styling other developers have to contend with,
	a common complaint I hear from backend developers <em>isn't working with HTML</em>, it's having to
	work with CSS and CSS class names. This brings me to the next point...
</p>

<p><strong>HAL is meant to be easy to understand for front end developers</strong></p>

<p>
	I initially tried to create a CSS architecture that would be backend developer friendly. What I
	ended up creating was a system that was easy for front end developers to understand.
</p>

<p>
	Helper classes are a big part of HAL for rapidly laying out elements and overriding base styles.
	All of the helper classes have names based on their CSS instructions:
</p>

<div>
	<p class="text-center font-size-12 margin-bottom-1">A typical helper class.</p>
	<Prism language="css">
		{`.display-flex {
    display: flex;
}
.justify-content-center {
    justify-content: center;
}`}
	</Prism>
</div>

<p>
	I actually found a lot of similarities to the helper classes I was creating for HAL to what <a
		href="https://getbootstrap.com/">Bootstrap</a
	> was already doing. The similarities were close enough that I began to rewrite helper classes to conform
	with Bootstrap's naming. Since HAL is philosophy, it's also possible to plug Bootstrap into a project
	and use that as a helper library. Bootstrap has it's pros and cons that I won't get into, but HAL functions
	great with it.
</p>

<h4>Keep appearance seperate from layout.</h4>

<p>
	This is a fairly simple rule at heart. The idea is to keep styles that dictate what elements look
	like seperate from how elements are arranged. When we do this, it's easier to rearrange elements
	without changing their appearance, and vice versa. It also helps us decide where best to put
	styles.
</p>

<p>
	The simplest application of this is for the main layout of a given application, your header,
	footer, sidebars and content box. Suppose you have the following design:
</p>

<div class="display-flex justify-content-center margin-bottom-8"><HolyGrail /></div>

<div class="display-flex justify-content-center align-items-start col-margin-4">
	<div>
		<p class="font-size-12 margin-bottom-1">Our HTML</p>
		<Prism language="html">
			{`<div class="main">
	<div class="header">
		Header
	</div>

	<div class="left-sidebar">
		Sidebar
	</div>

	<div class="content">
		B
	</div>

	<div class="right-sidebar">
		Sidebar
	</div>

	<div class="footer">
		Footer
	</div>
</div>`}
		</Prism>
	</div>

	<div>
		<p class="font-size-12 margin-bottom-1">Our CSS</p>
		<Prism language="css">
			{`.main {
    display: grid;

    grid-template-areas:
        'header header header'
        'left-sidebar content right-sidebar'
        'footer footer footer';

    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;

    height: 100vh;
}
.header {
    grid-area: header;
}

.left-sidebar {
    grid-area: left-sidebar;
    margin-left: 0.5rem;
}

.content {
    grid-area: content;
}

.right-sidebar {
    grid-area: right-sidebar;
    margin-right: 0.5rem;
}

.footer {
    grid-area: footer;
}`}
		</Prism>
	</div>
</div>

<p>It can be quite tempting to blend our background styles right into our layout styles:</p>

<Prism language="css">
	{`.left-sidebar {
    background: gray;
    grid-area: left-sidebar;
    margin-left: 0.5rem;
}`}
</Prism>

<p>
	For our simple use case is this entirely innocuous, but we run into problems in larger
	applications where we have the following factors to deal with:
</p>

<ul>
	<li>Logic integrated with front end code, such as conditionals, loops and variables.</li>
	<li>Large components with hundreds of lines of code.</li>
	<li>Elements within elements.</li>
</ul>

<p>
	As an application grows and design changes are made, this tends to lead to technical debt,
	excessive CSS overrides and broken layouts.
</p>

<p>
	Components make it real easy to seperate appearance from layout, using Svelte as the example here:
</p>

<div>
	<p class="font-size-12 text-center margin-bottom-1">Our layout component.</p>
	<div class="display-flex justify-content-center align-items-start col-margin-4">
		<div>
			<Prism language="svelte">
				{`<div class="main">
    <div class="header">
        Header
    </div>

    <Sidebar class="left-sidebar" />

    <div class="content">
        B
    </div>

    <Sidebar class="left" side="right" />

    <div class="footer">
        Footer
    </div>
</div>
`}
			</Prism>
		</div>
		<div>
			<Prism language="css">
				{`.left-sidebar {
    grid-area: left-sidebar;
    margin-left: 0.5rem;
}`}
			</Prism>
		</div>
	</div>
</div>

<div>
	<p class="font-size-12 text-center margin-bottom-1">Our sidebar component.</p>
	<div class="display-flex justify-content-center align-items-start col-margin-4">
		<div>
			<Prism language="html">
				{`<div>
    Sidebar
</div>`}
			</Prism>
		</div>
		<div>
			<Prism language="css">
				{`div {
    background: gray;
}`}
			</Prism>
		</div>
	</div>
</div>

<p>
	There are a few other methods that can be done to keep appearance styles seperate from layout styles, but components don't come with hidden drawbacks like the following methods have:
</p>

<ul>
	<li>Using seperate selectors.</li>
	<li>Using seperate classes.</li>
	<li>Applying styles in seperate code blocks.</li>
</ul>

<h4>Using Helpers Effectively</h4>

<p>
	This is the last section in HAL because on their own, helper classes look like a terrible mess of
	an idea.
</p>

<p>
	Let's first build something like the following element a few different ways. This way we can see
	the extreme bell end of helper classes:
</p>

<div class="display-flex justify-content-center"><ExampleElement /></div>

<HelperExampleCase />

<p>The CSS Only example is going to look really nice here:</p>

<div>
    <div class="display-flex justify-content-center align-items-start col-margin-4">
        <div>
            <p class="font-size-12 margin-bottom-1">Our HTML</p>
<Prism language="html">
	{`<div class="example-card">
    <div class="example-card-header">Using CSS Only</div>
    <div class="example-card-body">
        <div>
            <label class="example-card-label">Name</label>
            <input type="text" class="example-card-input" />
        </div>
        <div>
            <label class="example-card-label">Summary</label>
            <input type="text" class="example-card-input" />
        </div>
    </div>
</div>`}
</Prism>
        </div>
        <div>
            <p class="font-size-12 margin-bottom-1">Our CSS</p>
<Prism language="css">
	{`.example-card-header {
    background: var(--magenta-50);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    padding: 0.25rem 0.5rem;
    color: var(--white-50);
}
.example-card-body {
    background: var(--gray-400);
    border: 1px solid var(--magenta-50);
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    padding: 0.5rem 0.5rem 1rem;
}
.example-card-body > div {
    margin-bottom: 0.5rem;
}
.example-card-body > div:last-child {
    margin-bottom: 0;
}
.example-card-label,
.example-card-input {
    display: block;
}
.example-card-input {
    border-radius: var(--border-radius);
    border: 1px solid var(--gray-75);
    padding: 0.25rem;
}`}
</Prism>
        </div>
    </div>
</div>



<p>Using only helper classes we don't need any CSS, though we do end up with excessively long class attributes:</p>

<Prism language="html">
    {`<div>
    <div class="background-magenta-50 text-white-50 padding-1 padding-left-2 padding-right-2 border-radius-top-left border-radius-top-right">
        Using Helper Classes
    </div>
    <div class="border-magenta-50 border-radius-bottom-left border-radius-bottom-right padding-2 padding-bottom-4 background-gray-400 row-margin-4">
        <div>
            <label class="display-block">Name</label>
            <input type="text" class="background-gray-500 border-gray-50 border-radius padding-1"
            />
        </div>
        <div>
            <label class="display-block">Summary</label>
            <input type="text" class="background-gray-500 border-gray-50 border-radius padding-1"
            />
        </div>
    </div>
</div>`}
</Prism>

<p>We can see why Bootstrap decided to abbreviate class names like margin, padding and background resulting in a more convincing and concise look for helpers only.  This is also why we still have global stylesheets that establish base styles for elements like <code>label</code> and <code>input</code>:</p>

<Prism language="html">
    {`<div>
    <div class="bg-magenta-50 text-white-50 p-1 ps-2 pe-2 border-radius-tl border-radius-tr">
        Using Helper Classes
    </div>
    <div class="border-magenta-50 border-radius-bl border-radius-br p-2 pb-4 bg-gray-400 row-margin-4">
        <div>
            <label>Name</label>
            <input type="text" />
        </div>
        <div>
            <label>Summary</label>
            <input type="text" />
        </div>
    </div>
</div>`}
</Prism>

<p>HAL does not dictate which of the two methods above to use, or to which extent both methods can be blended together.  HAL only requires of the CSS only example that <em>all custom CSS is confined to a immediate and relavent component</em>.</p>

<p>The big no-no with HAL is to create CSS class modules in our global stylesheets:</p>
<Prism language="html">
    {`<div>
    <div class="bg-magenta-50 text-white-50 p-1 ps-2 pe-2 border-radius-tl border-radius-tr">
        <!-- DON'T DO THIS -->
        <div class="card-title">Card title is a class in base.scss!</div>
        <!-- JUST DON'T    -->
    </div>
    <div class="border-magenta-50 border-radius-bl border-radius-br p-2 pb-4 bg-gray-400 row-margin-4">
        <div>
            <label>Name</label>
            <input type="text" />
        </div>
        <div>
            <label>Summary</label>
            <input type="text" />
        </div>
    </div>
</div>`}
</Prism>

<p>Where helpers really shine is when you have a concise grouping of elements, take the following design:</p>

<div class="display-flex justify-content-center"><HelperLayoutExample /></div>

<p>We can get away with just two helper classes:</p>

<Prism language="svelte">
{`<div class="display-flex justify-content-around">
    <Container />
    <FirstContainer />
    <LocalNavigation />
</div>`}
</Prism>

<p>Which I find to be much easier and faster than writing up one off classes in a <code>style</code> tag at the bottom of a component:</p>

<div>
    <div class="display-flex justify-content-center align-items-start col-margin-4">
        <div>
            <p class="font-size-12 margin-bottom-1">Our HTML</p>
<Prism language="html">
{`<div class="come-up-with-something-creative-here-okay">
    <Container />
    <FirstContainer />
    <LocalNavigation />
</div>`}
</Prism>
        </div>
        <div>
            <p class="font-size-12 margin-bottom-1">Our CSS</p>
<Prism language="css">
{`.come-up-with-something-creative-here-okay {
    display: flex;
    justify-content: around;
}`}
</Prism>
        </div>
    </div>
</div>

<p>This last example is important, because we will find these micro-styling situations everywhere within a web application.  The CSS Only example is fine until you start to find yourself <em>repeatadly</em> having to invent a new class name for another element that contains some combination of <code>display: flex; justify-content: around;</code>.  Helper classes not only keep our stylesheets neat and tidy, they also help keep the style tags in our components free from repeat instructions that can cloud out our more complex styles (like transitions and animations).</p>