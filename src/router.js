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
			path: "/article/:uid", name: "article", component: () => import("@/views/article/_uid.vue")
		},
	]
})

export default router