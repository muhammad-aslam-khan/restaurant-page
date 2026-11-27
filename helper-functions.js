export default function createElement(tag, text = "", cls = "", id = "") {
	const element = document.createElement(tag);

	if (text !== "") element.textContent = text;
	if (cls !== "") element.classList.add(cls);
	if (id !== "") element.id = id;
	return element;
}
