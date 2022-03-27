<template>
	<header class="header__background-green">
		<div class="container">
			<navbar />
			<ul class="breadcrumb">
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'index' }">Accueil</router-link>
				</li>
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'contact' }">Nous contacter</router-link>
				</li>
			</ul>
			<h1>Contact</h1>
		</div>
	</header>
	<main>
		<section class="container contact section-mt" v-if="home">
			<form class="contact__left" action="https://baptiste-jouin.go.yj.fr/sendemail.php" method="POST">
				<h2>Vous avez une question, une suggestion ?</h2>
				<div class="form__group">
					<label class="form__label" for="name">Votre nom</label>
					<input
						class="form__input"
						name="firstname"
						type="text"
						id="name"
						placeholder="ex. Michel"
						required
					/>
				</div>
				<div class="form__group">
					<label class="form__label" for="lastname">Votre prénom</label>
					<input
						class="form__input"
						name="lastname"
						type="text"
						id="lastname"
						placeholder="ex. Jean"
						required
					/>
				</div>
				<div class="form__group">
					<label class="form__label" for="email">Votre adresse mail</label>
					<input
						class="form__input"
						type="email"
						name="sender"
						id="email"
						placeholder="ex. adresse@email.com"
						required
					/>
				</div>
				<div class="form__group">
					<label class="form__label" for="subject">Sujet</label>
					<input
						class="form__input"
						type="text"
						name="subject"
						id="email"
						placeholder="ex. Demande de rendez-vous"
						required
					/>
				</div>
				<div class="form__group">
					<label class="form__label" for="message">Message</label>
					<textarea
						class="form__textarea"
						id="message"
						name="content"
						placeholder="ex. Bonjour, je vous contacte à propos de..."
						required
					></textarea>
				</div>
				<div class="form__submit">
					<button class="btn" type="submit">Soumettre mon message</button>
				</div>
			</form>
			<div class="contact__right">
				<div class="contact__info">
					<div class="about__line">
						<img src="@/assets/img/icones/icon_phone.svg" />
						<a :href="`tel:${$prismic.asText(home.data.phone)}`">{{ $prismic.asText(home.data.phone) }}</a>
					</div>
					<div class="about__line">
						<img src="@/assets/img/icones/icon_mail.svg" />
						<a :href="`mailto:${$prismic.asText(home.data.email)}`">{{ $prismic.asText(home.data.email) }}</a>
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
		</section>
		<section class="container section-mt">
			<h2>Rencontrez-nous !</h2>
			<iframe
				class="contact__iframe"
				src="https://www.google.com/maps/embed?&pb=!1m18!1m12!1m3!1d5381.754657669144!2d1.3353894000000002!3d47.58962805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4a8061cf4a189%3A0xb28fb2df5099ea60!2sLa%20Fabrique!5e0!3m2!1sfr!2sfr!4v1647463078876!5m2!1sfr!2sfr"
				allowfullscreen
				loading="lazy"
			></iframe>
		</section>
	</main>
	<foot />
</template>
<script setup>
import { useSinglePrismicDocument } from '@prismicio/vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Footer/Footer.vue'
const { data: home, error: homeError, state: homeState } = useSinglePrismicDocument('home')
</script>
