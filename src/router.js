import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/", name: "index", component: () => import("@/views/index.vue")
		},
		{
			path: "/articles", name: "articles", component: () => import("@/views/articles.vue")
		},
		{
			path: "/articles/:uid", name: "article", component: () => import("@/views/articles/_uid.vue")
		},
	]
})

export default router