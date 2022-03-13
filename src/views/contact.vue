<template>
	<header class="header__background-green header__background-green">
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
			<div>Contact</div>
		</div>
	</header>
	<main></main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
</script>