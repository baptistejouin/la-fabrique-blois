<template>
	<nav class="navbar">
		<router-link to="/" class="navbar__logo">
			<img src="@/assets/img/logos/logo_fabrique.svg" />
		</router-link>
		<div class="navbar__full" :class="{ 'navbar__full--mobile-active': mobileExpended }">
			<button
				class="navbar__mobile-only navbar__close"
				@click="toggleMobileNav()"
				aria-label="Toggle mobile navbar"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					width="32"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M18 6L6 18M6 6l12 12"
					/>
				</svg>
			</button>
			<ul class="navbar__items">
				<li class="navbar__item">
					<router-link :to="{ name: 'about' }">À propos</router-link>
				</li>
				<li class="navbar__item">
					<router-link :to="{ name: 'articles' }">Évènements</router-link>
				</li>
				<li class="navbar__item">
					<router-link :to="{ name: 'reservation' }">Réservation</router-link>
				</li>
				<li class="navbar__item">
					<router-link :to="{ name: 'contact' }">Contact</router-link>
				</li>
			</ul>
		</div>
		<div class="navbar__mobile-only">
			<button class="navbar__menu" @click="toggleMobileNav()">
				<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line y1="1" x2="25" y2="1" stroke="black" stroke-width="2" />
					<line y1="11" x2="25" y2="11" stroke="black" stroke-width="2" />
					<line y1="21" x2="25" y2="21" stroke="black" stroke-width="2" />
				</svg>
				Menu
			</button>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			mobileExpended: false
		}
	},
	methods: {
		toggleMobileNav() {
			this.mobileExpended = !this.mobileExpended
		}
	},
}
</script>