<template>
	<div class="article__mt">
		<h2
			v-if="slice.primary.grid_title"
			class="article__heading2"
		>{{ $prismic.asText(slice.primary.grid_title) }}</h2>
		<prismic-rich-text
			v-if="slice.primary.grid_description"
			class="article__subtitle"
			:field="slice.primary.grid_description"
		/>
		<div class="article__grid" id="slider">
			<prismic-image
				v-for="(item, i) in slice.items"
				:key="i"
				class="article__grid-img"
				:field="item.grid_image"
				:imgix-params="{ w: 600 }"
			/>
		</div>
	</div>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue'

export default {
	props: getSliceComponentProps()
}
</script>