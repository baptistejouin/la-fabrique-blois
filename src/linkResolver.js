export function linkResolver(document) {
	if (document.type === "articles") return "/article/" + document.uid

	return "/"
}