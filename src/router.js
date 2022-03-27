import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'navbar__item--active',
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [{
            path: '/',
            name: 'index',
            component: () =>
                import ('@/views/index.vue'),
            meta: {
                title: "Accueil | La Fabrique"
            }
        },
        {
            path: '/articles',
            name: 'articles',
            component: () =>
                import ('@/views/articles/index.vue'),
            meta: {
                title: 'Évènements | La Fabrique'
            }
        },
        {
            path: '/articles/:uid',
            name: 'article',
            component: () =>
                import ('@/views/articles/_uid.vue')
        },
        {
            path: '/a-propos',
            name: 'about',
            component: () =>
                import ('@/views/about.vue'),
            meta: {
                title: 'À propos | La Fabrique'
            }
        },
        {
            path: '/reservation',
            name: 'reservation',
            component: () =>
                import ('@/views/reservation.vue'),
            meta: {
                title: 'Réservation | La Fabrique'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import ('@/views/contact.vue'),
            meta: {
                title: 'Contact | La Fabrique'
            }
        },
        {
            path: '/terms',
            alias: '/mentions-legales',
            name: 'terms',
            component: () =>
                import ('@/views/terms.vue'),
            meta: {
                title: 'Mentions Légales | La Fabrique'
            }
        },
        {
            path: '/*',
            alias: '/404',
            name: 'NotFound',
            component: NotFound,
            meta: {
                title: '404 | La Fabrique'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'La Fabrique'
    next()
})

export default router