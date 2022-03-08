<template>
	<div class="event__slider" id="js-articles-slider">
		<template v-for="(article, i) in articles" :key="i">
			<prismic-link :field="article" class="event__card">
				<img class="event__card-img"
				:src="
					asImageSrc(article.data.thumbnail, {
						h: 450
					})
				"
				:alt="article.data.thumbnail.alt" />

				<div class="event__card-date">{{ new Date(article.first_publication_date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
				<h3 class="event__card-title">{{ $prismic.asText(article.data.title) }}</h3>
				<p class="event__card-description">{{ $prismic.asText(article.data.short_description) }}</p>
			</prismic-link>
		</template>
	</div>
</template>
<script>
import { tns } from 'tiny-slider';
import { asImageSrc } from '@prismicio/helpers';

export default {
	props: ['articles'],
	name: 'EventSlider',
	data() {
		return {
			eventSlider: undefined
		}
	},
	methods: {
		asImageSrc
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
		});
	},
	unmounted() {
		this.eventSlider.destroy()
	},
};
</script>
