import { createPrismic } from "@prismicio/vue"
import { linkResolver } from "./linkResolver"

const prismic = createPrismic({
	endpoint: "la-fabrique-blois",
	linkResolver
})

export default prismic