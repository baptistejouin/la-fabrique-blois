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

		<slice-zone :slices="article.data.body" :components="components" />

		<br />
		<details>
			<summary>Réponse JSON</summary>
			<pre>{{ article }}</pre>
		</details>
		<br />
	</main>
	<four-o-four v-else-if="error" />
</template>
<script setup>
import { useRoute } from 'vue-router';
import { usePrismicDocumentByUID } from '@prismicio/vue';

import FourOFour from '@/components/FourOFour.vue';
import ParagraphSlice from '@/slices/ParagraphSlice.vue';
import GrilleImageSlice from '@/slices/GrilleImageSlice.vue';

const route = useRoute();

const { data: article, error } = usePrismicDocumentByUID('articles', route.params.uid);
// Handle if no article -> 404 page
const components = { paragraphe: ParagraphSlice, grille_d_image: GrilleImageSlice };
</script>

<style>
img {
	max-width: 400px;
	height: auto;
}
</style>
