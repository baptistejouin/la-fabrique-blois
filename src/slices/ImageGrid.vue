<template>
	<div class="gallery">
		<prismic-rich-text class="gallery__title" :field="slice.primary.optional_title" />
		<prismic-rich-text
			class="gallery__subtitle"
			v-if="slice.primary.optional_subtitle"
			:field="slice.primary.optional_subtitle"
		/>
		<div class="gallery__wrapper" id="slider">
			<prismic-image
				class="gallery__img"
				:field="item.image"
				v-for="(item, i) in slice.items"
				:key="i"
			/>
		</div>
	</div>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue'

export default {
	// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
	props: getSliceComponentProps(["slice", "index", "slices", "context"])
}
</script>

<style>
.gallery {
	overflow: hidden;
}
.gallery__title {
	text-align: center;
}
.gallery__subtitle {
	text-align: center;
	color: #8e8e8e;
}
.gallery__wrapper {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	gap: 10px;
	justify-content: center;
}
.gallery__img {
	max-width: 300px;
	object-fit: contain;
}
.tns-visually-hidden {
	position: absolute;
	left: -10000em;
}
</style>
