<template>
	<div class="event__slider" id="js-articles-slider">
		<template v-for="article in articles.results" :key="article.id">
			<prismic-link :field="article" class="event__card">
				<prismic-image
					class="event__card-img"
					:field="article.data.thumbnail"
					:imgix-params="{ h: 450 }"
				/>
				<div
					class="event__card-date"
				>{{ $prismic.asDate(article.first_publication_date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }) }}</div>
				<h3 class="event__card-title">{{ $prismic.asText(article.data.title) }}</h3>
				<p
					class="event__card-description"
				>{{ truncateString($prismic.asText(article.data.short_description), 130) }}</p>
			</prismic-link>
		</template>
	</div>
</template>
<script>
import { tns } from 'tiny-slider'

export default {
	props: ['articles'],
	name: 'EventSlider',
	data() {
		return {
			eventSlider: undefined
		}
	},
	methods: {
		// TODO: Move to useTruncateString (Composition API)
		truncateString(str, num) {
			if (str.length <= num) {
				return str
			}
			return str.slice(0, num) + '...'
		}
	},
	mounted() {
		this.eventSlider = tns({
			container: '#js-articles-slider',
			controlsContainer: '#js-articles-controls-slider',
			items: 1,
			mouseDrag: true,
			nav: false,
			gutter: 18,
			rewind: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		})
	},
	unmounted() {
		this.eventSlider.destroy()
	},
}
</script>
