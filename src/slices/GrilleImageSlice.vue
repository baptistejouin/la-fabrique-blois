<template>
	<div class="gallery">
		<prismic-rich-text class="gallery__title" :field="slice.primary.optional_title" />
		<prismic-rich-text class="gallery__subtitle" v-if="slice.primary.optional_subtitle" :field="slice.primary.optional_subtitle" />
		<div class="gallery__wrapper">
			<template v-for="(item, i) in slice.items" :key="i">
				<!-- <prismic-image class="gallery__img" :field="item.image" /> -->
				<img
					class="gallery__img"
					:src="
						asImageSrc(item.image, {
							w: 350,
							h: 350,
							px: 15
						})
					"
					:alt="item.image.alt"
				/>
			</template>
		</div>
	</div>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue';
import { asImageSrc } from '@prismicio/helpers';

export default {
	props: getSliceComponentProps(),
	methods: {
		asImageSrc
	}
};
</script>

<style>
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
	min-height: 200px;
	width: 300px;
	object-fit: cover;
}
</style>
