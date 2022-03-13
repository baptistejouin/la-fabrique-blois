<template>
	<nav class="navbar">
		<router-link to="/" class="navbar__logo">
			<img src="@/assets/img/logos/logo_fabrique.svg" />
		</router-link>
		<div
			class="navbar__full"
			:class="{ 'navbar__full--mobile-active': mobileExpended }"
			:tabindex="{ '-1': mobileExpended }"
			:aria-hidden="!mobileExpended"
			:aria-expanded="mobileExpended"
		>
			<button class="navbar__menu navbar__close navbar__mobile-only" @click="toggleMobileNav()">
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
						d="M4 12h16M4 6h16M4 18h16"
					/>
				</svg>
				Menu
			</button>
		</div>
	</nav>
	<!-- <nav class="navbar__mobile" aria-hidden="true" aria-expanded="false">
		
	</nav>-->
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