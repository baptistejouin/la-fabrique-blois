<template>
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
		<main class="container">
			<template v-if="content.results_size >= 1">
				<section class="articles__grid">
					<article v-for="article in content.results" :key="article.id" class="articles__container">
						<prismic-link :field="article">
							<prismic-image
								class="articles__thumbnail"
								:field="article.data.thumbnail"
								:imgix-params="{ h: 450 }"
							/>
							<div
								class="articles__date"
							>{{ $prismic.asDate(article.first_publication_date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }) }}</div>
							<h2 class="articles__title">{{ $prismic.asText(article.data.title) }}</h2>
							<p
								class="articles__description"
							>{{ truncateString($prismic.asText(article.data.short_description), 130) }}</p>
						</prismic-link>
					</article>
				</section>
				<div class="paginate">
					<a
						v-if="content.prev_page && content.prev_page != 1"
						class="paginate__prev"
						:href="`?page=${content.page - 1}`"
					>
						<svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="m10 16 10 10 1.4-1.4-8.6-8.6 8.6-8.6L20 6 10 16Z" />
						</svg>
					</a>
					<button v-else class="paginate__prev" disabled>
						<svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="m10 16 10 10 1.4-1.4-8.6-8.6 8.6-8.6L20 6 10 16Z" />
						</svg>
					</button>
					<div class="paginate__current">page {{ content.page }}/{{ content.total_pages }}</div>
					<a
						v-if="content.next_page && content.total_pages != content.page"
						class="paginate__next"
						:href="`?page=${content.page + 1}`"
					>
						<svg width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6l10 10Z" />
						</svg>
					</a>
					<button v-else class="paginate__next" disabled>
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { usePrismicDocumentsByType } from '@prismicio/vue'

import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'

const route = useRoute()
let page = ref(route.query.page || 1)

const { data: content, error: articlesError, state: articlesState } =
	usePrismicDocumentsByType('articles', {
		pageSize: 3,
		page: page.value,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc'
		}
	})

// TODO: Move to useTruncateString (Composition API)
function truncateString(str, num) {
	if (str.length <= num) {
		return str
	}
	return str.slice(0, num) + '...'
}
</script>
