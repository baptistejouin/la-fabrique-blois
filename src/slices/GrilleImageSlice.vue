<template>
	<prismic-rich-text :field="slice.primary.optional_title" />
	<prismic-image :field="slice.items[0].image_1" />
</template>
<script>
import { getSliceComponentProps } from '@prismicio/vue';
export default {
	props: getSliceComponentProps()
};
</script>
