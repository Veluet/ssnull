<script>
	import Prism from 'svelte-prism';
	import Color from '../../../Color.svelte';
</script>

<p>
	This is a collection of SASS snippets that I like to use to generate a light to dark shades/tints
	from a color pallette. It's complete overkill for small applications, but for applications that
	look to incorporate imagery and animations these. I based this off of different articles and
	techniques I've read, primarily: <a href="https://www.kevinpowell.co/article/using-my-colors/"
		>Using a Sass map for colors</a
	>.
</p>

<h4>The Basics</h4>

<p>First create a map of all the base colors:</p>
<Prism>
	{`$colors: (
    "primary": #eaeb24,
    "purple": #8824eb,
    "blue": #2524eb,
    "green": #24eb88,
    "cyan": #d43e7c,
    "lilac": #5d59a6,
);`}
</Prism>

<p>
	Then we can generate a map of all our color shades. I like to emulate how light effects colors in
	the real world, with colors under shadows becoming desaturated. I also like to have color names
	match up with how they are named in design software. Since I'm using Figma, color names follow the
	pattern of <Color name="Red">Red 50</Color>:
</p>
<Prism>
	{`@function color-map($color, $values) {
    $base:        $values;
    $lightest:    scale-color(mix(#fff, $values, 60%), $saturation: 13%);
    $lighter:     scale-color(mix(#fff, $values, 25%), $saturation: 11%);
    $darker:      scale-color(mix(#000, $values, 30%), $saturation: -9%);
    $darkest:     scale-color(mix(#000, $values, 45%), $saturation: -15%);


    $color-shades: (
            #{$color}-100: $lightest,
            #{$color}-75:  $lighter,
            #{$color}-50:  $base,
            #{$color}-25:  $darker,
            #{$color}-0:   $darkest
    );

    @return $color-shades;
}`}
</Prism>

<p>
	Now prepare a map that we can easily loop through to generate styles like <code
		>background-color</code
	>:
</p>
<Prism>
	{`//  Setup the map for all colors
@function color-maps($colors) {
    $color-map: ();

    @each $color, $value in $colors {
    $map: (color-map($color, $value));
    $color-map: map-merge($color-map, $map);
    }

    @return $color-map;
}

//  Now build that map
$color-map: color-maps($colors);`}
</Prism>

<p>Finally, the exciting part, generating helper classes:</p>
<Prism>
	{`@each $name, $color-shade in $color-map {
    .background-#{$name} {
        background-color: #{$color-shade}!important;
    };
    .text-#{$name} {
        color: #{$color-shade}!important;
    };
    .border-#{$name} {
        border-width: 1px;
        border-style: solid;
        border-color: #{$color-shade}!important;
    };
}`}
</Prism>

<h4>Using CSS Varialbes Instead of a SASS Map</h4>
<p>
	I'm not a fan of calling a map everytime I want to use a color. It's also not easily possible to
	call on a SASS map from within components when using a framework like Svelte or Vue.
</p>

<p>Let's create a mixin for dumping the contents of a SASS Map out as a global CSS variables:</p>
<Prism>
	{`@mixin dump-map($map) {
    :root {
        @each $name, $value in $map {
        --#{$name}: #{$value}
        }
    }
}`}
</Prism>

<p>Then call whatever maps we want to dump as CSS Variables:</p>
<Prism>
	{`@include dump-map($color-map);
@include dump-map($colors);
@include dump-map($deliberate-colors);
@include dump-map($white-opacity);`}
</Prism>

<p>And the result is the following in our CSS:</p>
<Prism>
	{`:root {
--primary-100: #f8f8a6;
--primary-75: #f1f259;
--primary-50: #eaeB24;
--primary-25: #9e9f1f;
--primary-0: #79791c;
--purple-100: #cfa6f8;
--purple-75: #a659f2;
--purple-50: #8824eb;
--purple-25: #5f1f9f;
--purple-0: #4b1c79;
--blue-100: #a7a6f8;
--blue-75: #5a59f2;
--blue-50: #2524eb;
--blue-25: #201f9f;
--blue-0: #1c1c79;
--green-100: #a6f8cf;
--green-75: #59f2a6;
--green-50: #24EB88;
--green-25: #1f9f5f;
--green-0: #1c794b;
--cyan-100: #f0b0cb;
--cyan-75: #e36a9c;
--cyan-50: #d43e7c;
--cyan-25: #8f3058;
--cyan-0: #6f2845;
--lilac-100: #bab8e0;
--lilac-75: #7f7cc3;
--lilac-50: #5D59A6;
--lilac-25: #434072;
--lilac-0: #363458;
  }`}
</Prism>

<h4>Dealing with Exceptions</h4>
<p>
	There is a flaw to generatinig colors alogrithmically instead of by hand. We perceive a color like <Color
		name="Yellow"
	/> as being brighter than a color like <Color name="Blue" />. I also run into issues with black,
	white and gray as the shading is either too dramatic, or not dramatic enough.
</p>
<p>For this site, I used seperate SASS Maps and typed out those colors:</p>
<Prism>
	{`$white: #FAFAFA;
$black-0: #13130E;
$black-25: #232210;
$gray-50: #808080;
$gray-25: #6E6D69;
$primary-00: #403F17;
$text: #484848;

$deliberate-colors: (
    "white": $white,
    "black-0": $black-0,
    "black-25": $black-25,
    "gray-50": $gray-50,
    "gray-25": $gray-25,
    "primary-00": $primary-00,
    "text": $text,
);

$white-opacity: (
    "white-opacity-90": rgba($white, .9),
    "white-opacity-75": rgba($white, .75),
)`}
</Prism>

<p>
	Alternatively, adding if statements when generating the color map is another way to introduce
	either additional colors, or different mapping altogether:
</p>
<Prism>
	{`@function color-map($color, $values) {
    $base:        $values;
    $lightest-ssjgssj:    scale-color(mix(#fff, $values, 99%), $saturation: 21%);
    $lightest-ssjg:    scale-color(mix(#fff, $values, 97%), $saturation: 19%);
    $lightest-ssj3:    scale-color(mix(#fff, $values, 93%), $saturation: 18%);
    $lightest-ssj2:    scale-color(mix(#fff, $values, 90%), $saturation: 17%);
    $lightest-ssj:    scale-color(mix(#fff, $values, 80%), $saturation: 15%);
    $lightest:    scale-color(mix(#fff, $values, 60%), $saturation: 13%);
    $lighter:     scale-color(mix(#fff, $values, 25%), $saturation: 11%);
    $light-hint:  scale-color(mix(#fff, $values, 15%), $saturation:  9%);
    $dark-hint:   scale-color(mix(#000, $values,  5%), $saturation: -3%);
    $darker:      scale-color(mix(#000, $values, 30%), $saturation: -9%);
    $darkest:     scale-color(mix(#000, $values, 45%), $saturation:-15%);
  
  
    $color-shades: (
            #{$color}-100: $lightest,
            #{$color}-75:  $lighter,
            #{$color}-66:  $light-hint,
            #{$color}-50:  $base,
            #{$color}-33:  $dark-hint,
            #{$color}-25:  $darker,
            #{$color}-0:   $darkest
    );
  
    @if $color == "goku" or "vegita" {
      $map: (#{$color}-200: $lightest-ssj);
      $color-shades: map-merge($color-shades, $map);
    }
  
    @if $color == "goku" {
      $map: (#{$color}-300: $lightest-ssj2);
      $color-shades: map-merge($color-shades, $map);
    }
  
    @if $color == "goku" {
      $map: (#{$color}-400: $lightest-ssj3);
      $color-shades: map-merge($color-shades, $map);
    }
  
    @if $color == "goku" {
      $map: (#{$color}-500: $lightest-ssjg);
      $color-shades: map-merge($color-shades, $map);
    }
  
    @if $color == "goku" {
      $map: (#{$color}-600: $lightest-ssjgssj);
      $color-shades: map-merge($color-shades, $map);
    }
  
    ITS OVER 9000
    @if $color == "goku" {
      $map: (#{$color}-9001: $lightest-perfectultrainstinct);
      $color-shades: map-merge($color-shades, $map);
    }
  
    @return $color-shades;
  }`}
</Prism>

<p>
	I tend to prefer creating static SASS Maps instead of polluting the main function with conditional
	statements. When a given color has been identified as needing to be hand tuned, then it's variants
	will likely need to be hand typed anyways.
</p>

<h4>But Why Though?</h4>
<p>
	<strong>To save time.</strong> These snippets generate a lot of helper classes without having to
	type them by hand. I also find that helper classes prevent CSS spaghetti and cut down on front end
	development time substantially.
</p>
<p>
	<strong>To establish a consistent palette of colors.</strong> I've seen numerous times the need for
	shades and tints for elements like alert boxes, CTA buttons and vector images. Shadows and grayscale
	elements also tend to deviate wildly as not all branding guides include shades of gray. Generated colors
	are also sent back to the design team. It's also trivial to adjust colors when they're all located
	in the same place in the code and called from variables.
</p>
