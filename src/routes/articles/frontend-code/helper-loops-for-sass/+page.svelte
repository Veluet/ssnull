<script>
	import Prism from 'svelte-prism';
</script>

<p>
	I tend to find from project to project I need the same handful of helper classes. Whenever
	possible I use mixins to generate these helpers due to the ease of maintenance&mdash;it's nice to
	be able to add or remove additional classes to a range.
</p>

<h4>The Helper Loop</h4>

<p>
	This is the classic mixin I use for generating helper classes, which I just call the helper loop:
</p>

<Prism>
	{`// e.g. .a-1 {z-index:1} .a-2 {z-index:2} .a-3 {z-index:3}
@mixin helper-loop($start, $stop, $step, $class-name, $property, $unit, $unit-start: false,
                    $unit-step: false, $extend: "") {

    $i: $start;

    @if not $unit-start {
    $unit-start: $start;
    }

    @if not $unit-step {
    $unit-step: $step;
    }

    $value: $unit-start;

    @while $i <= $stop {

    .#{$class-name}-#{$i} {
        #{$property}: #{$value}#{$unit}!important;
    };

    @if ($extend != "") {
        .#{$class-name}-#{$i} { @extend #{$extend} }
    }

    $value: $value + $unit-step;

    $i: $i + $step;

    }
}`}
</Prism>

Let's take a look at an example for generating some margin classes. First is the more simple
example, where <code>.margin-15</code> gives a value of <code>margin: 15px</code>:

<Prism>
	{`@include helper-loop(0, 15, 5, 'margin', 'margin', 'px');`}
</Prism>

Or maybe we want to abstract the numerical value on the helper class from the unit itself, so
<code>.margin-4</code>
to get <code>margin: 1rem</code>:

<Prism>
	{`@include helper-loop(0, 4, 1, 'margin', 'margin', 'rem', 0, .25);`}
</Prism>

With fonts maybe we want to skip the odd numbers:

<Prism>
	{`@include helper-loop(8, 36, 2, 'font-size', 'font-size', 'rem', 0.625, 0.125);`}
</Prism>

<p>
	I like to have the number on the end of the helper class line up with the pixel size of a font, as
	it's easier to visualize what the result will be. So in this case <code>font-size-12</code> might
	be <code>1em</code>, but visually I want that to be the same as <code>12px</code>.
</p>

<p>
	Sometimes I'll setup two loops next to each other. Maybe I want a few odd number font sizes in
	that bread in butter range of 11&ndash;17 pixels:
</p>

<Prism>
	{`@include helper-loop(8, 36, 2, 'font-size', 'font-size', 'rem', 0.625, 0.125);
@include helper-loop(11, 17, 2, 'font-size', 'font-size', 'rem', 0.6875, 0.125);`}
</Prism>

<p>
	I like to have some classes to nudge elements using <code>position: relative;</code>, but I really
	just want to use a single helper class to do this like <code>.top-1</code>. This is where that
	<code>extend</code> parameter comes in:
</p>

<Prism>
	{`.relative {
    position: relative;
}
  
@include helper-loop(1, 5, 1, 'top', 'top', 'px', false, false, ".relative");`}
</Prism>

<p>
	Then all I need is one class to nudge an element <span class="bottom-2">up</span> or
	<span class="bottom-2" />. I love this one for icons which rarely have the same visual baseline as
	text:
</p>

<Prism language="html">
	{`Then all I need is one class to nudge an element <span class="bottom-2">up</span> or <span class="bottom-2"></span>`}
</Prism>

<h4>Responsive Classes</h4>

<p>
	Building out responsive classes is more complex. I use a loop in a loop to do this. I also don't
	use a global mixin for this like the other helpers, preferring to copy, paste and modify an
	existing loop.
</p>

<p>
	I'll use one of my spacing loops to demonstrate. Let's start with just one helper class to
	understand what we are creating:
</p>

<Prism language="css">
	{`
    .col-margin-1 > * {
        margin-left: .25rem;
        margin-right: .25rem;
    }
    .col-margin-1 > *:first-child {
        margin-left: 0;
    }
    .col-margin-1 > *:last-child {
        margin-right: 0;
    }
`}
</Prism>

<p>
	Having child selectors and psuedo selectors complicates this enough that I can't use my helper
	loop mixin, and responsive classes further complicate matters. First thing I need is a map of my
	breakpoints. I like to match my breakpoints to what Bootstrap uses as they're easy to commit to
	memory:
</p>

<Prism>
	{`$bootstrap-breakpoints: (
    'xs': 0,
    'sm': 576px,
    'md': 768px,
    'lg': 992px,
    'xl': 1200px,
    'xxl': 1400px,
);`}
</Prism>

<p>
	I want to be able to pass parameters into a function of some sort and have that spit out all the
	helper classes for me. That function call will look like this:
</p>

<Prism>{`@include spacing-loop(.25, 4, 'margin');`}</Prism>

<p>
	I'm going to be calling this loop a couple of times to generate <code>.col-margin-8</code>,
	<code>.col-margin-12</code>
	and <code>.col-margin-16</code>. So there is a hidden parameter of
	<code>$spacing-breakpoints</code> which is map of all the breakpoints I want to generate classes for.
</p>

<Prism>
	{`$spacing-breakpoints: 'xs', 'sm'; // 'md', 'lg', 'xl', 'xxl';`}
</Prism>

<p>Next we need to generate each of the media breakpoints:</p>

<Prism>
	{`@mixin spacing-breakpoint-loop($property, $i, $value, $breakpoints) {

    @each $breakpoint in $breakpoints {

    @media (min-width: map-get($bootstrap-breakpoints, $breakpoint)) {
        @include spacing-styles($property, $i, $value, $breakpoint);
    }

    }

}`}
</Prism>

<p>This means our last mixin has the actual classes and instructions in it:</p>

<Prism>
	{`@mixin spacing-styles($property, $i, $value, $breakpoint) {

@if $breakpoint == 'xs' {
  $breakpoint: '';
}
@else {
  $breakpoint: '-#{$breakpoint}';
}

.col-#{$property}#{$breakpoint}-#{$i} > * {
  #{$property}-left: calc(#{$value}rem / 2);
  #{$property}-right: calc(#{$value}rem / 2);
}
.col-#{$property}#{$breakpoint}-#{$i} > *:first-child {
  #{$property}-left: 0
}
.col-#{$property}#{$breakpoint}-#{$i} > *:last-child {
  #{$property}-right: 0
}
}`}
</Prism>

<p>
	The only thing I want to call out here is the check for the smallest possible breakpoint of <code
		>'xs'</code
	>. The media query applies to any screen size which 0px and above, which means that class applies
	to all screen sizes and we don't need to designate those classes as <code>'-xs-'</code>.
</p>

<p>To close this out I'm going to include the entire <code>_spacing.scss</code> file.  Keep in mind that I have <code>$bootstrap-breakpoints</code> as global variable for all my <code>scss</code> files, but I'll include here for simplicity:</p>

<Prism>
{`/* Child Spacing
* Stuff to generate a helper classes for setting the spacing on all child elements.
*/

/* EXAMPLE: .col-margin-1 or .row-margin-1 or .row-padding-1 or .col-margin-12 */
// You get 1, 2, 3, 4, 8, 12, 16.  Padding isn't enabled (so enable if needed). Jump to end of file.

// This should be a global variable available to all scss files.
$bootstrap-breakpoints: (
'xs': 0,
'sm': 576px,
'md': 768px,
'lg': 992px,
'xl': 1200px,
'xxl': 1400px,
);

// Add the breakpoints as they are needed: 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
$spacing-breakpoints: 'xs'; //, 'sm', 'md', 'lg', 'xl', 'xxl';

@mixin spacing-styles($property, $i, $value, $breakpoint) {

    @if $breakpoint == 'xs' {
    $breakpoint: '';
    }
    @else {
    $breakpoint: '-#{$breakpoint}';
    }

    .col-#{$property}#{$breakpoint}-#{$i} > * {
    #{$property}-left: calc(#{$value}rem / 2);
    #{$property}-right: calc(#{$value}rem / 2);
    }
    .col-#{$property}#{$breakpoint}-#{$i} > *:first-child {
    #{$property}-left: 0
    }
    .col-#{$property}#{$breakpoint}-#{$i} > *:last-child {
    #{$property}-right: 0
    }

    .row-#{$property}#{$breakpoint}-#{$i} > * {
    #{$property}-top: calc(#{$value}rem / 2);
    #{$property}-bottom: calc(#{$value}rem / 2);
    }
    .row-#{$property}#{$breakpoint}-#{$i} > *:first-child {
    #{$property}-top: 0
    }
    .row-#{$property}#{$breakpoint}-#{$i} > *:last-child {
    #{$property}-bottom: 0
    }
}

@mixin spacing-breakpoint-loop($property, $i, $value, $breakpoints) {

    @each $breakpoint in $breakpoints {

    @media (min-width: map-get($bootstrap-breakpoints, $breakpoint)) {
        @include spacing-styles($property, $i, $value, $breakpoint);
    }

    }

}

@mixin spacing-loop($amount, $steps, $property, $start: false) {

    $i: 1;

    @if $start {
    $i: $start;
    }

    $value: $amount;

    @while $i <= $steps {

    @include spacing-breakpoint-loop($property, $i, $value, $spacing-breakpoints);

    $value: $value + $amount;

    $i: $i + 1;
    }
}
// Example: .col-margin-1
@include spacing-loop(.25, 4, 'margin');
@include spacing-loop(2, 8, 'margin', 8); // For 2rem
@include spacing-loop(3, 12, 'margin', 12); // For 3rem
@include spacing-loop(4, 16, 'margin', 16); // For 4rem

// Enable if needed.
// @include spacing-loop(.25, 4, 'padding');`}
</Prism>