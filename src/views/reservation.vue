<template>
	<header class="header__background-green">
		<div class="container">
			<navbar />
			<ul class="breadcrumb">
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'index' }">Accueil</router-link>
				</li>
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'reservation' }">Réservation</router-link>
				</li>
			</ul>
			<div class="rooms__header">
				<h1 class="rooms__title">Réservation de salle</h1>
				<div class="slider-control" id="js-rooms-controls-slider">
					<button aria-label="Previous slide" title="Previous slide">
						<img class="slider-prev" src="@/assets/img/icones/icon_arrow.svg" alt="Previous slide icon" />
					</button>
					<button aria-label="Next slide" title="Next slide">
						<img class="slider-next" src="@/assets/img/icones/icon_arrow.svg" alt="Next slide icon" />
					</button>
				</div>
			</div>
			<rooms-slider v-if="about" :rooms="about.data.rooms" />
		</div>
	</header>
	<main>
		<section class="container schedule section-mt">
			<iframe
				class="schedule__iframe"
				src="https://www.supersaas.fr/schedule/LaFabrique/R%C3%A9servation_de_salles?"
			></iframe>
		</section>
		<section class="container join section-mt" id="join">
			<div class="join__right">
				<h2>Nous rejoindre</h2>
				<p>
					Pour réserver une salle à La Fabrique, vous avez besoin de vous inscrire dans la structure.
					<br />Pour cela,
					<strong>remplissez notre fiche</strong> et rendez-vous à La Fabrique pour finaliser votre inscription !
				</p>
				<a
					class="btn"
					href="src\assets\download\NOM_Prenom_fiche_inscription_lafabrique.pdf"
					download
				>Télecharger la fiche d'inscription</a>
			</div>
		</section>
	</main>
	<foot />
</template>
<script setup>
import { useSinglePrismicDocument } from '@prismicio/vue'

import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'
import RoomsSlider from '@/components/About/RoomsSlider.vue'

const { data: about } = useSinglePrismicDocument('about')
</script>
