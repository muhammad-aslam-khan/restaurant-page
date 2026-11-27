// import "./styles.css";
// import restPicture from "./assets/restaurant.jpg";
// import dishPicture from "./assets/dish.jpg";

import createHomePage from "./home-page.js";
import createMenuPage from "./menu-page.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", (e) => loadHomePage(e));
// window.addEventListener("load", (e) => loadHomePage(e));

function loadHomePage(e) {
	// On click events first remove existing page
	if (e.type === "click") {
		const existingContent = document.querySelector("#content");
		existingContent.remove();
	}

	setActiveBtn("home");

	document.body.append(createHomePage()); // Create and append new page
}

function loadManuPage(e) {
	// On click events first remove existing page
	if (e.type === "click") {
		const existingContent = document.querySelector("#content");
		existingContent.remove();
	}

	setActiveBtn("menu");

	document.body.append(createMenuPage()); // Create and append new page
}

function setActiveBtn(btn) {
	if (btn === "home") {
		homeBtn.id = "active";

		menuBtn.removeAttribute("id");
		aboutBtn.removeAttribute("id");
	} else if (btn === "menu") {
		menuBtn.id = "active";

		homeBtn.removeAttribute("id");
		aboutBtn.removeAttribute("id");
	} else if (btn === "about") {
		aboutBtn.id = "active";

		homeBtn.removeAttribute("id");
		menuBtn.removeAttribute("id");
	}
}
