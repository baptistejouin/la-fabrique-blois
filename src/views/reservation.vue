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
			<h1>Réservation de salle</h1>
		</div>
	</header>
	<main>
		<section class="container schedule">
			<iframe src="https://www.supersaas.fr/schedule/LaFabrique/R%C3%A9servation_de_salles?"></iframe>
		</section>
		<section class="container join section-mt">
			<div class="about__right">
				<h2>Nous rejoindre</h2>
				<p>Pour réserver une salle à La Fabrique, vous avez besoin de vous inscrire dans la structure.<br />Pour cela, <strong>remplissez notre fiche</strong> et rendez-vous à La Fabrique pour finaliser votre inscription !</p>
				<a class="btn" href="src\assets\download\NOM_Prenom_fiche_inscription_lafabrique.pdf" download>Télecharger la fiche d'inscription</a>
			</div>
		</section>
	</main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
