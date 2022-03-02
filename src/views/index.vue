<template>
	<header>
		<template v-if="data">
			<h1>
				{{ $prismic.asText(data.data.title) }}
			</h1>
			<p>
				{{ $prismic.asText(data.data.description) }}
			</p>
			<h2>Nos articles</h2>
			<ul>
				<li v-for="post in posts.results" :key="post.uid" class="article">
					<PrismicLink :field="post">
						<article>
							<PrismicText :field="post.data.title" wrapper="h3" />
							<section>
								<PrismicImage :field="post.data.thumbnail" />
								<PrismicText :field="post.data.description" />
							</section>
						</article>
					</PrismicLink>
				</li>
			</ul>
		</template>
	</header>
</template>
<script setup>
import { usePrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/vue';

const { data } = useSinglePrismicDocument('home');
const { data: posts } = usePrismicDocumentsByType('post');
</script>
<style scoped>
header {
	font-family: sans-serif;
}
section {
	display: flex;
	gap: 2rem;
}
img {
	max-height: 200px;
}
a {
	text-decoration: none;
	color: inherit;
}
ul {
	padding: 0 2rem;
}
li {
	list-style: none;
}
.article {
	border: 1px solid black;
	padding: 2rem;
}
h3 {
	margin-top: 0;
}
</style>
