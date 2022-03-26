<template>
	<!-- <section class="newsletter container section-mt">
		<h2 class="newsletter__title">Reste informé de nos actualités, inscris-toi à notre newsletter&nbsp;:</h2>
		<input class="newsletter__input" type="text" placeholder="ex. mon-adresse@mail.com" />
	</section>-->
	<section class="partners section-mt" v-if="partners">
		<div class="container">
			<div class="partners__header">
				<h2 class="partners__title">{{ $prismic.asText(partners.data.partners_title) }}</h2>
				<div class="slider-control" id="js-partner-controls-slider">
					<button aria-label="Previous slide" title="Previous slide">
						<img class="slider-prev" src="@/assets/img/icones/icon_arrow.svg" alt="Previous slide icon" />
					</button>
					<button aria-label="Next slide" title="Next slide">
						<img class="slider-next" src="@/assets/img/icones/icon_arrow.svg" alt="Next slide icon" />
					</button>
				</div>
			</div>
			<partners-slider :partners="partners" />
		</div>
	</section>
	<footer class="footer">
		<h2
			class="visibility-hidden"
		>Toute les pages importantes de La Fabrique ainsi que nos réseaux sociaux.</h2>
		<div class="footer__wrapper container">
			<div class="footer__info">
				<img src="@/assets/img/logos/logo_fabrique.svg" alt />
				<div>
					<h3 class="footer__link-title">La Fabrique</h3>
					<p>Centre d’activités collectives, de création et d’accueil à destination des jeunes blésois.</p>
				</div>
			</div>
			<div class="footer__links">
				<div>
					<h3 class="footer__link-title">La structure</h3>
					<ul class="footer__link-list">
						<li class="footer__link-item">
							<router-link :to="{ name: 'about' }">À propos</router-link>
						</li>
						<li class="footer__link-item">
							<router-link :to="{ name: 'articles' }">Événements</router-link>
						</li>
						<li class="footer__link-item">
							<router-link :to="{ name: 'reservation' }">Réservation</router-link>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="footer__link-title">Informations</h3>
					<ul class="footer__link-list">
						<li class="footer__link-item">
							<router-link :to="{ name: 'reservation', hash: '#join' }">Nous rejoindre</router-link>
						</li>
						<li class="footer__link-item">
							<router-link :to="{ name: 'contact' }">Contact</router-link>
						</li>
						<li class="footer__link-item">
							<router-link :to="{ name: 'terms' }">Mentions Légales</router-link>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="footer__link-title">Nous trouver</h3>
					<ul class="footer__link-list">
						<li class="footer__link-item">
							<img src="@/assets/img/icones/icon_pinpoint.svg" />7 Rue d'Auvergne, 41000 Blois
						</li>
						<li class="footer__link-item">
							<img src="@/assets/img/icones/icon_calendar.svg" />Du lundi au vendredi (12h30 - 18h), ouverture à 14 h le mercredi.
						</li>
					</ul>
				</div>
			</div>
			<div class="footer__social">
				<h3>Suivez-nous&nbsp;!</h3>
				<div class="footer__social-list">
					<a
						href="https://www.instagram.com/lafabriqueblois/?hl=fr"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="@/assets/img/icones/icon_instagram.svg" alt="La Fabrique Instagram" />
					</a>
					<a href="https://www.facebook.com/LaFabrique.Blois/" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/img/icones/icon_facebook.svg" alt="La Fabrique Facebook" />
					</a>
					<a href="http://snapchat.com" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/img/icones/icon_snapchat.svg" alt="La Fabrique Snapchat" />
					</a>
				</div>
			</div>
		</div>
		<div class="footer__credits">
			Made with
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				width="16"
				height="16"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
				/>
			</svg>
			by
			<a
				href="https://github.com/baptistejouin"
				target="_blank"
				rel="noopener noreferrer"
			>Baptiste</a>
			and
			<a href="https://alexboc.fr" target="_blank" rel="noopener noreferrer">Alexian</a>.
		</div>
	</footer>
</template>

<script setup>
import { useSinglePrismicDocument } from '@prismicio/vue'
import PartnersSlider from '@/components/Footer/PartnersSlider.vue'

const { data: partners } = useSinglePrismicDocument('partners')
</script>
