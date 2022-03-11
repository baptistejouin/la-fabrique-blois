import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'navbar__item--active',
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('@/views/index.vue'),
			meta: {
				title: 'Page d\'accueil | La Fabrique',
			}
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
			component: () => import('@/views/about.vue'),
			meta: {
				title: 'À propos | La Fabrique',
			}
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
			component: NotFound,
			meta: {
				title: '404 | La Fabrique',
			}
		}
	]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'La Fabrique'
    next()
})

export default router
