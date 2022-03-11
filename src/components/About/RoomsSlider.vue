<template>
	<div class="rooms__slider" id="js-rooms-slider">
		<template v-for="(room, i) in rooms" :key="i">
			<div class="rooms__card">
				<h3 class="rooms__card-title">{{ $prismic.asText(room.label) }}</h3>
				<div class="rooms__card-img-container">
					<prismic-image class="rooms__card-img" :field="room.img" :imgix-params="{ h: 600 }" />
				</div>
			</div>
		</template>
	</div>
</template>
<script>
import { tns } from 'tiny-slider'

export default {
	props: ['rooms'],
	name: 'RoomsSlider',
	data() {
		return {
			roomSlider: undefined
		}
	},
	mounted() {
		this.roomSlider = tns({
			container: '#js-rooms-slider',
			controlsContainer: '#js-rooms-controls-slider',
			items: 1,
			mouseDrag: true,
			nav: false,
			gutter: 24,
			rewind: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		})
	},
	unmounted() {
		this.roomSlider.destroy()
	},
}
</script>
