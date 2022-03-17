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
			<div>Réservation / Nous rejoindre</div>
		</div>
	</header>
	<main></main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
</script>