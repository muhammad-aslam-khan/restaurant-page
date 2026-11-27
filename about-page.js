import createElement from "./helper-functions.js";

export default function createAboutPage() {
	const about = createElement("div", "", "about-page", "content");

	about.append(
		createIntroSection(),
		createOurStorySection(),
		createOurPhilosophySection(),
		createClosingSection(),
	);

	// Styling

	return about;
}

function createIntroSection() {
	const section = createElement("section", "", "about-hero"); // Parent

	const sectionContent = createElement("div", "", "about-hero-content"); // Parent

	const span = createElement("span", "A LITTLE ABOUT US", "about-eyebrow");
	const heading = createElement("h1", "AMore Than Just a Meal");
	const description = createElement(
		"p",
		"Good food brings people together. At The Good Fork, every meal is made with care, passion, and a love for sharing good moments.",
	);

	sectionContent.append(span, heading, description);

	section.append(sectionContent);

	// Styling

	return section;
}

function createOurStorySection() {
	const story = createElement("div", "", "our-story"); // Parent

	const storyImgDiv = createElement("div", "", "story-image"); // Parent

	const storyImg = createElement("img");
	const imgUrl = new URL("./assets/restaurant-interior.jpg", import.meta.url)
		.href;
	storyImg.src = imgUrl;
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

	return valueCard;
}
