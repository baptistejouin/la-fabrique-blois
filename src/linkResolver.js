export function linkResolver(document) {
	if (document.type === 'articles') return `/articles/${document.uid}`
	if (document.type === 'home') return '/'
	if (document.type === 'about') return '/a-propos'
	if (document.uid) return `/${doc.uid}`

	return '/404'
}