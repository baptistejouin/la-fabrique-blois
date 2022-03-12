<template>
	<loader v-if="homeState === 'pending' || aboutState === 'pending'" />
	<template v-else-if="about && home">
		<header class="container">
			<navbar />
			<ul class="breadcrumb">
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'index' }">Accueil</router-link>
				</li>
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'about' }">À propos</router-link>
				</li>
			</ul>
			<div class="rooms__header">
				<h1 class="rooms__title">À propos</h1>
				<div class="slider-control" id="js-rooms-controls-slider">
					<button aria-label="Previous slide" title="Previous slide">
						<img class="slider-prev" src="@/assets/img/icones/icon_arrow.svg" alt="Previous slide icon" />
					</button>
					<button aria-label="Next slide" title="Next slide">
						<img class="slider-next" src="@/assets/img/icones/icon_arrow.svg" alt="Next slide icon" />
					</button>
				</div>
			</div>
			<rooms-slider :rooms="about.data.rooms" />
		</header>
		<main>
			<section class="container about section-mt">
				<div class="about__right">
					<h2>{{ $prismic.asText(home.data.what_is_title) }}</h2>
					<prismic-rich-text :field="home.data.what_is_content" />
				</div>
				<div class="about__left">
					<div class="about__info">
						<div class="about__line">
							<img src="@/assets/img/icones/icon_phone.svg" />
							{{ $prismic.asText(home.data.phone) }}
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_mail.svg" />
							{{ $prismic.asText(home.data.email) }}
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_pinpoint.svg" />
							{{ $prismic.asText(home.data.adress) }}
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_calendar.svg" />
							{{ $prismic.asText(home.data.opening_days) }}
						</div>
					</div>
				</div>
			</section>

			<section class="container members section-mt">
				<div class="members__portraits">
					<prismic-image
						v-for="member in about.data.members"
						class="members__portraits-img"
						:field="member.img"
						:title="$prismic.asText(member.name)"
					/>
				</div>
				<div class="members__description">
					<h2>{{ $prismic.asText(about.data.who_we_title) }}</h2>
					<prismic-rich-text :field="about.data.who_we_content" />
					<div class="btn__wrapper">
						<a href="#" class="btn">Je prends contact</a>
						<a href="#" class="btn btn--secondary">Je rejoins La Fabrique</a>
					</div>
				</div>
			</section>
		</main>
		<foot />
	</template>
	<error v-else-if="homeError || aboutError" />
</template>

<script setup>
import { useSinglePrismicDocument } from '@prismicio/vue'

import Error from '@/components/Error.vue'
import Loader from '@/components/Loader.vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'
import RoomsSlider from '@/components/About/RoomsSlider.vue'

const { data: home, state: homeState, error: homeError } = useSinglePrismicDocument('home')
const { data: about, state: aboutState, error: aboutError } = useSinglePrismicDocument('about')
</script>