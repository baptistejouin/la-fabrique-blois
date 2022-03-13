<template>
	<header class="container">
		<navbar />
	</header>
	<main class="container">
		<h1>404 - Not Found</h1>
		<router-link to="/">Retour à la page d'accueil ></router-link>
	</main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
main {
	margin-top: 25vh;
	text-align: center;
}
</style>