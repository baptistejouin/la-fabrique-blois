<template>
	<main>
		<PrismicText :field="data.data.title" wrapper="h1" />
	</main>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { usePrismicDocumentByUID } from '@prismicio/vue';

const route = useRoute();

const { data } = usePrismicDocumentByUID('post', route.params.uid);
</script>
