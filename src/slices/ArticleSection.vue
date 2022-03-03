<template>
	<prismic-rich-text :field="slice.primary.title" />
	<template v-for="(item, i) in slice.items" :key="i">
		<prismic-rich-text :field="item.paragraph" />
	</template>
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue';
export default {
	props: getSliceComponentProps()
};
</script>
