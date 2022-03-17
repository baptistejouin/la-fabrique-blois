<template>
	<header class="header__background-green">
		<div class="container">
			<navbar />
			<ul class="breadcrumb">
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'index' }">Accueil</router-link>
				</li>
				<li class="breadcrumb__item">
					<router-link :to="{ name: 'articles' }">Évènements</router-link>
				</li>
			</ul>
			<h1>Évènements et actualités.</h1>
		</div>
	</header>
	<main class="container">
		<section class="section-mt">LA PAGE DES ARTCLES</section>
	</main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
