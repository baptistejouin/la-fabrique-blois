<template>
	<main v-if="article">
		<h1>{{ $prismic.asText(article.data.title) }}</h1>
		<p>{{ $prismic.asText(article.data.short_description) }}</p>
		<prismic-image :field="article.data.thumbnail" />
		<p>Mots clés :</p>
		<ul>
			<li v-for="(keyword, i) in article.data.keywords.split('\n')" :key="i">
				{{ keyword }}
			</li>
		</ul>

		<!-- <slice-zone :slice="article.data.body" :components="components" /> -->
		<!-- <slice-zone :slice="article.data.body" :resolver="({ sliceName }) => slices[sliceName]" /> -->

		<br />
		<pre>{{ article.data }}</pre>
	</main>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { usePrismicDocumentByUID } from '@prismicio/vue';

const route = useRoute();

const { data: article } = usePrismicDocumentByUID('articles', route.params.uid);
</script>

<style>
img {
	max-width: 400px;
	height: auto;
}
</style>
