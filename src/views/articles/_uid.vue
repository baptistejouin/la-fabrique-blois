<template>
<router-link to="/">Home</router-link>
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

		<slice-zone :slices="article.data.body" :components="components" />

		<br />
		<details>
			<summary>Réponse JSON</summary>
			<pre>{{ article }}</pre>
		</details>
		<br />
	</main>
	<not-found v-else-if="error" />
</template>
<script setup>
import { useRoute } from 'vue-router';
import { usePrismicDocumentByUID } from '@prismicio/vue';

import NotFound from '@/components/NotFound.vue';
import ArticleSection from '@/slices/ArticleSection.vue';
import ImageGrid from '@/slices/ImageGrid.vue';

const route = useRoute();
const { data: article, error } = usePrismicDocumentByUID('articles', route.params.uid);
const components = { paragraphe: ArticleSection, grille_d_image: ImageGrid };
</script>

<style scoped>
img {
	max-width: 500px;
	width: 100%;
	height: auto;
}
</style>
