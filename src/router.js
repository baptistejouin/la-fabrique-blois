import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('@/views/index.vue')
		},
		{
			path: '/articles',
			name: 'articles',
			component: () => import('@/views/articles.vue')
		},
		{
			path: '/articles/:uid',
			name: 'article',
			component: () => import('@/views/articles/_uid.vue')
		},
		{
			path: '/a-propos',
			name: 'about',
			component: () => import('@/views/about.vue')
		},
		// {
		//  path: "/reservation", name: "reservation", component: () => import("@/views/reservation.vue")
		// },
		// {
		//  path: "/contact", name: "contact", component: () => import("@/views/contact.vue")
		// },
		{
			path: '/:pathMatch(.*)*',
			alias: '/404',
			name: 'NotFound',
			component: NotFound
		}
	]
})

export default router
