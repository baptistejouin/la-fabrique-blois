<template>
	<header>
		<template v-if="home">
			<h1>{{ $prismic.asText(home.data.title) }}</h1>
			<p>{{ $prismic.asText(home.data.description) }}</p>
			<section>
				<h2>Nos articles</h2>
				<ul v-if="articles">
					<li v-for="article in articles.results" :key="article.uid" class="article">
						<prismic-link :field="article">
							<article>
								<prismic-text :field="article.data.title" wrapper="h3" />
								<section>
									<prismic-image :field="article.data.thumbnail" />
									<prismic-text :field="article.data.short_description" />
								</section>
							</article>
						</prismic-link>
					</li>
				</ul>
			</section>
		</template>
	</header>
</template>
<script setup>
import { usePrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/vue';

const { data: home } = useSinglePrismicDocument('home');
const { data: articles } = usePrismicDocumentsByType('articles');
</script>
<style>
section {
	display: flex;
	flex-direction: column;
	gap: 18px;
}
img {
	height: auto;
	max-width: 200px;
}
a {
	text-decoration: none;
	color: inherit;
}
ul {
	padding: 0;
}
li {
	list-style: none;
}
h3 {
	margin-top: 0;
}
.article {
	border-top: 1px solid #0000001b;
	padding: 6px 0;
	border-bottom: 1px solid #0000001b;
}
</style>
