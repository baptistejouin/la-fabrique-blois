<template>
	<div class="article__section article__mt">
		<h2 class="article__heading2">{{ $prismic.asText(slice.primary.section_title) }}</h2>
		<template v-for="(item, i) in slice.items" :key="i">
			<prismic-rich-text :field="item.section_content" :htmlSerializer="htmlSerializer" />
		</template>
	</div>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue'
export default {
	props: getSliceComponentProps(),
	methods: {
		htmlSerializer(type, element, content, children) {
			if (element.type === "heading2")
				return `<h2 class="article__heading2">${content}</h2>`
			if (element.type === "heading3")
				return `<h3 class="article__heading3">${content}</h3>`
			if (element.type === "image")
				return `<p><img class="article__image-block" src="${this.$prismic.asImageSrc(element, { h: 600 })}" alt="${element.alt}"></p>`

		}
	},
}
</script>
