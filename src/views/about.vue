<template>
	<loader v-if="homeState === 'pending' || aboutState === 'pending'" />
	<template v-else-if="about && home">
		<header class="header__background-green">
			<div class="container">
				<navbar />
				<ul class="breadcrumb">
					<li class="breadcrumb__item">
						<router-link :to="{ name: 'index' }">Accueil</router-link>
					</li>
					<li class="breadcrumb__item">
						<router-link :to="{ name: 'about' }">À propos</router-link>
					</li>
				</ul>
				<h1 class="rooms__title">À propos</h1>
			</div>
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
							<a href="tel:+33629317309">{{ $prismic.asText(home.data.phone) }}</a>
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_mail.svg" />
							<a href="mailto:hello@lafabrique-blois.fr">{{ $prismic.asText(home.data.email) }}</a>
						</div>
						<div class="about__line">
							<img src="@/assets/img/icones/icon_pinpoint.svg" />
							<a
								href="https://www.google.com/maps/place/La+Fabrique/@47.5941184,1.3336332,16z/data=!4m9!1m2!2m1!1sla+fabrique+blois!3m5!1s0x47e4a8061cf4a189:0xb28fb2df5099ea60!8m2!3d47.5941812!4d1.3377737!15sChFsYSBmYWJyaXF1ZSBibG9pc5IBEXJlY3JlYXRpb25fY2VudGVy"
							>
								{{
									$prismic.asText(home.data.adress)
								}}
							</a>
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
						<router-link :to="{ name: 'contact' }" class="btn">Je prends contact</router-link>
						<router-link :to="{ name: 'reservation' }" class="btn btn--secondary">Je rejoins La Fabrique</router-link>
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
