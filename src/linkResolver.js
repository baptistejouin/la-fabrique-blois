export function linkResolver(document) {
	if (document.type === "post") return "/article/" + document.uid

	return "/"
}