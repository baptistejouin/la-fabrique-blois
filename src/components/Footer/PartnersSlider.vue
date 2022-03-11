<template>
	<div class="slider" id="js-partner-slider">
		<template v-for="(partner, i) in partners.data.partners" :key="i">
			<a
				:href="$prismic.asText(partner.url)"
				target="_blank"
				rel="noopener noreferrer"
				:title="$prismic.asText(partner.label)"
			>
				<prismic-image
					:field="partner.thumbnail"
					:imgix-params="{ h: 350 }"
					:alt="$prismic.asText(partner.label)"
				/>
			</a>
		</template>
	</div>
</template>
<script>
import { tns } from 'tiny-slider'

export default {
	props: ['partners'],
	name: 'PartnersSlider',
	data() {
		return {
			partnerSlider: undefined
		}
	},
	mounted() {
		this.partnerSlider = tns({
			container: '#js-partner-slider',
			controlsContainer: '#js-partner-controls-slider',
			items: 1,
			mouseDrag: true,
			nav: false,
			loop: true,
			gutter: 14,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayButtonOutput: false,
			responsive: {
				0: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 5
				}
			}
		})
	},
	unmounted() {
		this.partnerSlider.destroy()
	}
}
</script>
