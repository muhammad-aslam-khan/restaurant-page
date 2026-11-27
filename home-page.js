import createFooter from "./footer.js";
import createElement from "./helper-functions.js";

export default function createHomePage() {
	const homeDiv = createElement("div", "", "home", "content");

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

	// Styling
	heroSection.style.cssText = `position: relative;
	height: 440px;
	overflow: hidden;
	color: #e4d8c7;`;

	restaurantImg.style.cssText = `width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;`;

	heroTextDiv.style.cssText = `position: absolute;
	z-index: 1;
	top: 50%;
	left: 5.5%;
	transform: translateY(-50%);`;

	heroSpan.style.cssText = `font-size: 42px;
	font-style: italic;`;

	heroHeading.style.cssText = `color: #f4b025;
	font-size: clamp(48px, 6vw, 88px);
	margin: 0;`;

	heroSubHeading.style.cssText = `font-size: 36px;
	font-style: italic;
	margin: 0;`;

	heroHeadingLine.style.cssText = `width: 160px;
	height: 3px;
	background-color: var(--color2);
	margin: 25px 0;`;

	heroExploreBtn.style.cssText = `background-color: var(--color2);
	color: var(--color1);
	border: none;
	border-radius: 30px;
	padding: 15px 32px;
	font-family: inherit;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.3s;`;

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

	// Styling
	introSection.style.cssText = `	min-height: 215px;
	background-color: var(--color5);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25px 5%;
	gap: 30px;`;

	introTextDiv.style.flex = "1.5";

	introText.style.cssText = `font-size: 25px;
	line-height: 1.55;
	margin: 0;`;

	introDecorDiv.style.cssText = `flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;`;

	decorationSpan.style.cssText = `color: #a44207;
	font-size: 40px;`;

	dishImg.style.cssText = `width: 85%;
	max-height: 190px;
	object-fit: contain;
	border-radius: 30px;`;

	return introSection;
}
