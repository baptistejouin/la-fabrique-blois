<template>
	<div class="article__mt">
		<h2
			v-if="slice.primary.banner_img_title"
			class="article__heading2"
		>{{ $prismic.asText(slice.primary.banner_img_title) }}</h2>
		<prismic-rich-text
			v-if="slice.primary.banner_img_subtitle"
			class="article__banner-subtitle"
			:field="slice.primary.banner_img_subtitle"
		/>
		<prismic-image
			class="article__banner-img"
			:field="slice.primary.banner_img_image"
			:imgix-params="{ w: 1000 }"
		/>
	</div>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue'
export default {
	props: getSliceComponentProps()
}
</script>
