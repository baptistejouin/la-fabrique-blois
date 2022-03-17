<template>
	<div class="article__mt">
		<h2
			v-if="slice.primary.embed_yt_video_title"
			class="article__heading2"
		>{{ $prismic.asText(slice.primary.embed_yt_video_title) }}</h2>
		<prismic-rich-text
			v-if="slice.primary.embed_yt_video_description"
			:field="slice.primary.embed_yt_video_description"
			class="article__subtitle"
		/>
		<prismic-embed class="article__embed-yt" :field="slice.primary.embed_yt_video_url" />
	</div>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue'
export default {
	props: getSliceComponentProps()
}
</script>
