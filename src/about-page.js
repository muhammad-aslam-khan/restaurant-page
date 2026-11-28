import createElement from "./helper-functions.js";
import aboutHeroImg from "./assets/about-hero.jpg";
import restaurantImg from "./assets/restaurant-interior.jpg";

export default function createAboutPage() {
	const about = createElement("div", "", "about-page", "content");

	about.append(
		createIntroSection(),
		createOurStorySection(),
		createOurPhilosophySection(),
		createClosingSection(),
	);

	// Styling
	about.style.cssText = `background-color: var(--color5);`;

	return about;
}

function createIntroSection() {
	const section = createElement("section", "", "about-hero"); // Parent

	const sectionContent = createElement("div", "", "about-hero-content"); // Parent

	const span = createElement("span", "A LITTLE ABOUT US", "about-eyebrow");
	const heading = createElement("h1", "A More Than Just a Meal");
	const description = createElement(
		"p",
		"Good food brings people together. At The Good Fork, every meal is made with care, passion, and a love for sharing good moments.",
	);

	sectionContent.append(span, heading, description);

	section.append(sectionContent);

	// Styling
	section.style.cssText = `min-height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 60px 10%;
	background:
		linear-gradient(rgba(5, 3, 2, 0.78), rgba(5, 3, 2, 0.78)),
		url(${aboutHeroImg}) center/cover no-repeat;
	color: var(--color5);`;

	sectionContent.style.cssText = `max-width: 750px;`;

	span.style.cssText = `color: var(--color2);
	font-size: 0.85rem;
	font-weight: bold;
	letter-spacing: 3px;`;

	heading.style.cssText = `font-size: 3.3rem;
	margin: 18px 0;`;

	description.style.cssText = `font-size: 1.1rem;
	line-height: 1.8;
	max-width: 650px;
	margin: 0 auto;`;

	return section;
}

function createOurStorySection() {
	const story = createElement("div", "", "our-story"); // Parent

	const storyImgDiv = createElement("div", "", "story-image"); // Parent

	const storyImg = createElement("img");
	storyImg.src = restaurantImg;
	storyImg.alt = "Warm and welcoming restaurant interior";

	const storyContent = createElement("div", "", "story-content"); // Parent

	const span = createElement("span", "OUR STORY", "about-eyebrow");
	const heading = createElement("h2", "Where Good Food Meets Good Company");
	const p1 = createElement(
		"p",
		"The Good Fork began with a simple idea: create a place where people could enjoy delicious food and feel right at home.",
	);
	const p2 = createElement(
		"p",
		"What started as a passion for cooking grew into a welcoming dining experience built around fresh ingredients, honest flavours, and memorable moments.",
	);

	storyImgDiv.append(storyImg);

	storyContent.append(span, heading, p1, p2);

	story.append(storyImgDiv, storyContent);

	// Styling

	story.style.cssText = `display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	gap: 60px;
	padding: 80px 10%;`;

	span.style.cssText = `color: var(--color3);
	font-size: 0.85rem;
	font-weight: bold;
	letter-spacing: 3px;`;

	storyImg.style.cssText = `width: 100%;
	height: 390px;
	object-fit: cover;
	border-radius: 8px;
	display: block;`;

	heading.style.cssText = `color: var(--color4);
	font-size: 2.3rem;
	line-height: 1.3;
	margin: 15px 0 20px;`;

	p1.style.cssText = `color: var(--color9);
	line-height: 1.9;
	margin-bottom: 15px;
	font-size: 1rem;`;

	p2.style.cssText = `color: var(--color9);
	line-height: 1.9;
	margin-bottom: 15px;
	font-size: 1rem;`;

	return story;
}

function createOurPhilosophySection() {
	const section = createElement("section", "", "our-philosophy"); // Parent

	const headingDiv = createElement("div", "", "philosophy-heading"); // Parent

	const span = createElement("span", "WHAT WE BELIEVE", "about-eyebrow");
	const heading = createElement("h2", "Our Recipe for Happiness");
	const description = createElement(
		"p",
		"Great dining is about more than what's on the plate.",
	);

	headingDiv.append(span, heading, description);

	const valueGrid = createElement("div", "", "values-grid");

	const values = [
		{
			icon: "✦",
			h3: "Fresh Ingredients",
			p: "We believe great flavours begin with quality ingredients and thoughtful preparation.",
		},
		{
			icon: "♡",
			h3: "Made with Care",
			p: "Every dish is prepared with attention, passion, and	a little extra love.",
		},
		{
			icon: "⌂",
			h3: "Warm Hospitality",
			p: "We want every guest to feel welcome, comfortable, and part of our family.",
		},
	];

	for (let i = 0; i < values.length; i++) {
		valueGrid.append(createValueCard(values[i]));
	}

	section.append(headingDiv, valueGrid);

	// Styling

	section.style.cssText = `background-color: #eee5d8;
	padding: 75px 8%;
	text-align: center;`;

	heading.style.cssText = `color: var(--color4);
	font-size: 2.4rem;
	margin: 15px 0;`;

	description.style.cssText = `color: var(--color8);
	margin-bottom: 45px;`;

	valueGrid.style.cssText = `display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 25px;`;

	return section;
}

function createClosingSection() {
	const section = createElement("section", "", "about-ending"); // Parent

	const heading = createElement("h2", "Come Hungry, Leave Happy");
	const description = createElement(
		"p",
		"Whether it's a quick lunch, a family dinner, or a special celebration, there's always a place for you at our table.",
	);

	section.append(heading, description);

	// Styling

	section.style.cssText = `background-color: var(--color4);
	color: var(--color5);
	text-align: center;
	padding: 65px 10%;`;

	heading.style.cssText = `color: var(--color2);
	font-size: 2.2rem;
	margin-bottom: 15px;`;

	description.style.cssText = `max-width: 650px;
	margin: 0 auto;
	line-height: 1.8;`;

	return section;
}

// Helper Function
function createValueCard(valueObj) {
	const valueCard = createElement("article", "", "value-card"); // Parent

	const icon = createElement("div", valueObj.icon);
	const heading = createElement("h3", valueObj.h3);
	const description = createElement("p", valueObj.p);

	valueCard.append(icon, heading, description);

	// Styling

	valueCard.style.cssText = `background-color: #faf7f1;
	padding: 35px 25px;
	border-radius: 8px;
	box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);`;

	icon.style.cssText = `color: var(--color3);
	font-size: 2.5rem;
	margin-bottom: 15px;`;

	heading.style.cssText = `color: var(--color4);
	font-size: 1.3rem;
	margin-bottom: 12px;`;

	description.style.cssText = `color: var(--color8);
	line-height: 1.7;`;

	return valueCard;
}
