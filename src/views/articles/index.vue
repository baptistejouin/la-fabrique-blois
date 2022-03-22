<template>
	<!-- <div v-if="content">{{ content }}</div> -->
	<loader v-if="articlesState === 'pending'" />
	<template v-else-if="content">
		<header class="header__background-green header__background-green--80h">
			<div class="container">
				<navbar />
				<ul class="breadcrumb">
					<li class="breadcrumb__item">
						<router-link :to="{ name: 'index' }">Accueil</router-link>
					</li>
					<li class="breadcrumb__item">
						<router-link :to="{ name: 'articles' }">Évènements</router-link>
					</li>
				</ul>
				<h1>Évènements et actualités.</h1>
			</div>
		</header>
		<details>
			JSON
			<pre>
				{{ content }}
			</pre>
		</details>
		<main class="container">
			<template v-if="content.results_size >= 1">
				<section class="articles__grid">
					<article v-for="article in content.results" :key="article.id" class="articles__container">
						<!-- <prismic-link :field="article">
							<prismic-image class="articles__thumbnail" :field="article.thumbnail" />
							<div
								class="articles__date"
							>{{ $prismic.asDate(article.first_publication_date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }) }}</div>
							<h2 class="articles__title">{{ $prismic.asText(article.title) }}</h2>
							<p
								class="articles__description"
							>{{ truncateString($prismic.asText(article.short_description), 130) }}</p>
						</prismic-link>-->
					</article>
				</section>
				<div class="paginate">
					<button class="paginate__prev" :disabled="!content.prev_page">
						<svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="m10 16 10 10 1.4-1.4-8.6-8.6 8.6-8.6L20 6 10 16Z" />
						</svg>
					</button>
					<div class="paginate__current">page {{ content.page }}/{{ content.total_pages }}</div>
					<button class="paginate__next" :disabled="!content.next_page">
						<svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6l10 10Z" />
						</svg>
					</button>
				</div>
			</template>
			<div v-else>
				<p>Aucun résultat trouvé pour cette page</p>
			</div>
		</main>
		<foot />
	</template>
	<error v-else-if="articlesError" />
</template>


<script setup>
// import { ref, onMounted } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

import { usePrismicDocumentsByType } from '@prismicio/vue'

import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'

const { data: content, error: articlesError, state: articlesState } = usePrismicDocumentsByType('articles', {
	pageSize: 6,
	orderings: {
		field: 'document.first_publication_date',
		direction: 'desc'
	}
})

// const route = useRoute()
// const router = useRouter()
// let page = ref(route.query.page || 1)
// let content = ref({})


// function getContent() {
// 	return usePrismicDocumentsByType('articles', {
// 		pageSize: 2,
// 		page: page.value,
// 		orderings: {
// 			field: 'document.first_publication_date',
// 			direction: 'desc'
// 		},
// 	})
// }

// function changePage(action) {
// 	if (action === 'next') page.value++
// 	if (action === 'prev') page.value--
// 	router.push({ query: { page: page.value } })
// 	// route.push({ path: '/users/eduardo' })
// 	// content.value = getContent()
// }

// onMounted(() => {
// 	content.value = getContent()
// })

// TODO: Move to useTruncateString (Composition API)
function truncateString(str, num) {
	if (str.length <= num) {
		return str
	}
	return str.slice(0, num) + '...'
}
</script>