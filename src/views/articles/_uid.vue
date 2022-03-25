<template>
	<loader v-if="state === 'pending'" />
	<template v-else-if="article">
		<header class="header__background-green">
			<div class="container">
				<navbar />
				<ul class="breadcrumb">
					<li class="breadcrumb__item">
						<router-link :to="{ name: 'index' }">Accueil</router-link>
					</li>
					<li class="breadcrumb__item">
						<router-link :to="{ name: 'articles' }">Évènements</router-link>
					</li>
					<li class="breadcrumb__item">
						<prismic-link :field="article">{{ truncateString($prismic.asText(article.data.title), 34) }}</prismic-link>
					</li>
				</ul>
				<div class="article__header">
					<h1 class="article__title">{{ $prismic.asText(article.data.title) }}</h1>
					<p
						class="article__date"
					>Publié le {{ $prismic.asDate(article.first_publication_date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit' }) }}</p>
				</div>
				<ul class="article__keywords">
					<li
						class="article__keyword"
						v-for="(keyword, i) in article.data.keywords?.split('\n')"
						:key="i"
					>{{ keyword }}</li>
				</ul>
			</div>
		</header>
		<main class="article__container">
			<slice-zone :slices="article.data.body" :components="components" />
		</main>
		<foot />
	</template>

	<not-found v-else-if="error" />
</template>
<script setup>
import { useRoute } from 'vue-router'
import { usePrismicDocumentByUID, defineSliceZoneComponents } from '@prismicio/vue'

import Loader from '@/components/Loader.vue'
import NotFound from '@/components/NotFound.vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'

import Section from '@/slices/articles/Section.vue'
import ImageGrid from '@/slices/articles/ImageGrid.vue'
import BannerImage from '@/slices/articles/BannerImage.vue'
import EmbedYtVideo from '@/slices/articles/EmbedYtVideo.vue'

const route = useRoute()
const { data: article, state, error } = usePrismicDocumentByUID('articles', route.params.uid)
const components = defineSliceZoneComponents({ section: Section, image_grid: ImageGrid, banner_image: BannerImage, embed_yt_video: EmbedYtVideo })

// TODO: Move to useTruncateString (Composition API)
function truncateString(str, num) {
	if (str.length <= num) {
		return str
	}
	return str.slice(0, num) + '...'
}

</script>