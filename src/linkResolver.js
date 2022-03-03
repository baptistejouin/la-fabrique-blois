export function linkResolver(document) {
	if (document.type === "articles") return "/articles/" + document.uid

	return "/"
}