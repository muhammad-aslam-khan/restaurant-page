import "./styles.css";
import createHomePage from "./home-page.js";
import createMenuPage from "./menu-page.js";
import createAboutPage from "./about-page.js";
import createFooter from "./footer.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

window.addEventListener("load", (e) => loadSelectedPage(e, "home"));

homeBtn.addEventListener("click", (e) => loadSelectedPage(e, "home"));
menuBtn.addEventListener("click", (e) => loadSelectedPage(e, "menu"));
aboutBtn.addEventListener("click", (e) => loadSelectedPage(e, "about"));

export default function loadSelectedPage(e, page) {
	// On click events first remove existing page
	if (e.type === "click") {
		document.querySelector("#content").remove();
		document.querySelector("#footer").remove();
	}

	setActiveBtn(page);

	// Create and append new page
	if (page === "home") document.body.append(createHomePage());
	else if (page === "menu") document.body.append(createMenuPage());
	else if (page === "about") document.body.append(createAboutPage());

	// Append Footer
	document.body.append(createFooter());
}

function setActiveBtn(btn) {
	if (btn === "home") {
		homeBtn.classList.add("active");

		menuBtn.classList.remove("active");
		aboutBtn.classList.remove("active");
	} else if (btn === "menu") {
		menuBtn.classList.add("active");

		homeBtn.classList.remove("active");
		aboutBtn.classList.remove("active");
	} else if (btn === "about") {
		aboutBtn.classList.add("active");

		homeBtn.classList.remove("active");
		menuBtn.classList.remove("active");
	}
}
