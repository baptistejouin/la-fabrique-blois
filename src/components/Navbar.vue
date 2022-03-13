<template>
	<nav class="navbar">
		<div class="navbar__logo">
			<router-link to="/">
				<img src="@/assets/img/logos/logo_fabrique.svg" />
			</router-link>
		</div>
		<div class="navbar__item">
			<router-link :to="{ name: 'about' }">À propos</router-link>
		</div>
		<div class="navbar__item">
			<router-link :to="{ name: 'articles' }">Évènements</router-link>
		</div>
		<div class="navbar__item">
			<router-link to="/reservation">Réservation</router-link>
		</div>
		<div class="navbar__item">
			<router-link to="/contact">Contact</router-link>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>