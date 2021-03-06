<template>
	<loader v-if="homeState === 'pending' || articlesState === 'pending'" />
	<template v-else-if="home && articles">
		<header class="container">
			<navbar />
			<div class="header">
				<div class="header__left">
					<prismic-rich-text :field="home.data.title" class="header__title" />
					<p class="header__description">{{ $prismic.asText(home.data.description) }}</p>
					<div class="btn__wrapper">
						<a href="https://www.youtube.com/watch?v=HNApxhvK1Hg" class="btn">Je visite en 360° !</a>
						<router-link :to="{ name: 'reservation' }" class="btn btn--secondary">Je réserve une salle</router-link>
					</div>
				</div>
				<div class="header__right">
					<swiper
						:effect="'cards'"
						:grabCursor="true"
						:modules="modules"
						class="header__slider"
						:autoplay="{
							delay: 2500,
							disableOnInteraction: false,
						}"
					>
						<swiper-slide v-for="slide in home.data.slider">
							<prismic-image :field="slide.img" />
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</header>
		<main>
			<section class="container about section-mt">
				<div class="about__left">
					<div class="about__info">
						<div class="about__line">
							<img src="@/assets/img/icones/icon_phone.svg" />
							<a :href="`tel:${$prismic.asText(home.data.phone)}`">{{ $prismic.asText(home.data.phone) }}</a>
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_mail.svg" />
							<a
								:href="`mailto:${$prismic.asText(home.data.email)}`"
							>{{ $prismic.asText(home.data.email) }}</a>
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_pinpoint.svg" />
							<a
								:href="`https://www.google.fr/maps/search/${$prismic.asText(home.data.adress)}?hl=fr&source=opensearch`"
							>{{ $prismic.asText(home.data.adress) }}</a>
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_calendar.svg" />
							{{ $prismic.asText(home.data.opening_days) }}
						</div>
					</div>
				</div>
				<div class="about__right">
					<h2>{{ $prismic.asText(home.data.what_is_title) }}</h2>
					<prismic-rich-text :field="home.data.what_is_content" />
					<router-link :to="{ name: 'about' }" class="btn">Dites m'en plus !</router-link>
				</div>
			</section>
			<section class="event section-mt">
				<div class="wrapper container">
					<div class="event__header">
						<h2 class="event__title">{{ $prismic.asText(home.data.event_title) }}</h2>
						<div class="slider-control" id="js-articles-controls-slider">
							<button aria-label="Previous slide" title="Previous slide">
								<img class="slider-prev" src="@/assets/img/icones/icon_arrow.svg" alt="Previous slide icon" />
							</button>
							<button aria-label="Next slide" title="Next slide">
								<img class="slider-next" src="@/assets/img/icones/icon_arrow.svg" alt="Next slide icon" />
							</button>
						</div>
					</div>
					<template v-if="articles">
						<event-slider :articles="articles" />
					</template>
				</div>
				<div class="container event__call-to-action">
					<router-link :to="{ name: 'articles' }" class="btn">Événements et actualités</router-link>
				</div>
			</section>
			<section class="faq container section-mt">
				<h2>{{ $prismic.asText(home.data.faq_title) }}</h2>
				<div class="faq__content">
					<div class="faq__left">
						<faq-item :items="home.data.faq_content" />
					</div>
					<div class="faq__right">
						<div class="faq__right-container">
							<img class="faq__question-icon" src="@/assets/img/icones/icon_help.svg" alt />
							<h3>Tu as encore des questions&nbsp;?</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet euismod elementum.</p>
							<router-link :to="{ name: 'contact' }" class="btn">Nous contacter</router-link>
						</div>
					</div>
				</div>
			</section>
		</main>
		<foot />
	</template>
	<error v-else-if="homeError || articlesError" />
</template>
<script setup>
import { usePrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/vue'

import Error from '@/components/Error.vue'
import Loader from '@/components/Loader.vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'
import FaqItem from '@/components/Homepage/FaqItem.vue'
import EventSlider from '@/components/Homepage/EventSlider.vue'
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards, Autoplay } from "swiper"

const modules = [Autoplay, EffectCards]

const { data: home, error: homeError, state: homeState } = useSinglePrismicDocument('home')
const {
	data: articles,
	error: articlesError,
	state: articlesState
} = usePrismicDocumentsByType('articles', {
	pageSize: 6,
	orderings: {
		field: 'document.first_publication_date',
		direction: 'desc'
	}
})
</script>