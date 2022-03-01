import { createPrismic } from "@prismicio/vue"

const prismic = createPrismic({
	endpoint: "la-fabrique-blois",
	clientConfig: {
		defaultParams: {
			routes: [
				{ type: "home", path="/" },
				{ type: "post", path="/article/:uid" },
			]
		}
	}
})

export default prismic