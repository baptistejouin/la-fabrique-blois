<template>
	<div class="faq__question-container" v-for="(item, i) in items" :key="i" :class="{ 'faq__question-container--is-open': isToggle(i) }">
		<div class="faq__question" @click="toggle(i)">
			<h3>{{ $prismic.asText(item.question) }}</h3>
			<button aria-label="Toggle the answer">
				<svg v-if="isToggle(i)" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 15H8v2h16v-2h-7Z" fill="#417C79" /></svg>
				<svg v-else width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2h-7Z" fill="#417C79" /></svg>
			</button>
		</div>
		<div class="faq__answer" :aria-hidden="!isToggle(i)">
			<prismic-rich-text :field="item.answer" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'FaqItem',
	props: ['items'],
	data() {
		return {
			faqOpen: []
		};
	},
	methods: {
		toggle(i) {
			this.faqOpen.includes(i)
				? this.faqOpen.splice(
						this.faqOpen.findIndex((index) => index === i),
						1
				  )
				: this.faqOpen.push(i);
		},
		isToggle(i) {
			return this.faqOpen.includes(i);
		}
	},
	computed: {}
};
</script>
