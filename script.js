// import "./styles.css";
// import restPicture from "./assets/restaurant.jpg";
// import dishPicture from "./assets/dish.jpg";

function createElement(tag, text = "", cls = "", id = "") {
	const element = document.createElement(tag);

	if (text !== "") element.textContent = text;
	if (cls !== "") element.classList.add(cls);
	if (id !== "") element.id = id;
	return element;
}

function createHomepage() {
	const homeDiv = createElement("div", "", "main", "home");

	homeDiv.append(createMainSection());
	homeDiv.append(createFooter());

	return homeDiv;
}

function createMainSection() {
	// Main Section
	const mainSection = createElement("main"); // Parent
	mainSection.append(createMainHeroSection());
	mainSection.append(createMainIntroSection());

	return mainSection;
}

function createMainHeroSection() {
	const heroSection = createElement("section", "", "hero"); // Parent

	const restPicture = new URL("./assets/restaurant.jpg", import.meta.url);
	const restaurantImg = createElement("img");
	restaurantImg.src = restPicture.href;
	// restaurantImg.src = restPicture;
	restaurantImg.alt = "The Good Fork restaurant exterior";

	heroSection.append(restaurantImg);

	const heroTextDiv = createElement("div", "", "hero-text"); // Parent
	const heroSpan = createElement("span", "Welcome to");
	const heroHeading = createElement("h1", "The Good Fork");
	const heroSubHeading = createElement("p", "Great Food. Good Mood");
	const heroHeadingLine = createElement("div", "", "hero-line");
	const heroExploreBtn = createElement(
		"button",
		"Explore Our Menu →",
		"explore-btn",
	);

	heroTextDiv.append(
		heroSpan,
		heroHeading,
		heroSubHeading,
		heroHeadingLine,
		heroExploreBtn,
	);

	heroSection.append(heroTextDiv);

	return heroSection;
}

function createMainIntroSection() {
	const introSection = createElement("div", "", "introduction"); // Parent

	const introTextDiv = createElement("div", "", "intro-text"); // Parent
	const introText = createElement(
		"p",
		"At The Good Fork, we bring you a delightful dining experience with fresh ingredients, great recipes and a warm atmosphere. Whether it's a casual meal or a special occasion, we're here to make it memorable.",
	);

	introTextDiv.append(introText);

	const introDecorDiv = createElement("div", "", "intro-decoration"); // Parent
	const decorationSpan = createElement("span", "♨");

	const dishPicture = new URL("./assets/dish.jpg", import.meta.url);
	const dishImg = createElement("img");
	dishImg.src = dishPicture.href;
	// dishImg.src = dishPicture;

	introDecorDiv.append(decorationSpan, dishImg);

	introSection.append(introTextDiv, introDecorDiv);

	return introSection;
}

function createFooter() {
	const footer = createElement("footer", "", "", "footer"); // Parent

	const footerSec1 = createElement("div", "", "footer-section");

	const sec1Heading = createElement("h3", "★ Quick Links");
	footerSec1.append(sec1Heading);

	const sec1Links = [
		"› This Week Special",
		"› Breakfast Menu",
		"› Sweet Dishes",
		"› Organically Grown Food",
		"› Blog",
	];
	for (let i = 0; i < sec1Links.length; i++) {
		footerSec1.append(createElement("a", sec1Links[i]));
	}

	const footerSec2 = createElement("div", "", "footer-section");

	const sec2Heading = createElement("h3", "❧ More Info");
	footerSec2.append(sec2Heading);

	const sec2Links = [
		"› Sustainability Policy",
		"› Bookings",
		"› Complaint or Suggestions",
		"› Contact Us",
		"› Follow us on Social",
	];
	for (let i = 0; i < sec2Links.length; i++) {
		footerSec2.append(createElement("a", sec2Links[i]));
	}

	const social = createElement("div", "", "social-links");
	const socialLinks = ["f", "◎", "▶", "𝕏"];
	for (let i = 0; i < socialLinks.length; i++) {
		social.append(createElement("a", socialLinks[i]));
	}

	const copyRight = createElement(
		"div",
		"© The Good Fork. All rights reserved.",
		"copyright",
	);

	footer.append(footerSec1, footerSec2, social, copyRight);

	return footer;
}

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

function loadHomePage(e) {
	// On click events first remove existing page
	if (e.type === "click") {
		const existingMain = document.querySelector(".main");
		existingMain.remove();
	}

	document.body.append(createHomepage()); // Create and append new page

	homeBtn.id = "active";

	menuBtn.removeAttribute("id");
	aboutBtn.removeAttribute("id");
}

homeBtn.addEventListener("click", (e) => loadHomePage(e));
// window.addEventListener("load", (e) => loadHomePage(e));
