import createFooter from "./footer.js";
import createElement from "./helper-functions.js";

const menuSecHeadings = [
	{
		starters: {
			span: "01",
			h2: "Starters",
			p: "A delicious beginning to your dining experience.",
		},
	},
	{
		mainCourse: {
			span: "03",
			h2: "Sweet Dishes",
			p: "End your meal with something wonderfully sweet.",
		},
	},
	{
		deserts: {
			span: "02",
			h2: "Main Course",
			p: "Hearty meals prepared with passion and fresh ingredients.",
		},
	},
];

export default function createMenuPage() {
	const menu = createElement("div", "", "menu-page", "content");

	menu.append(
		createMenuPageHeading(),
		createStaterSection(),
		createMainCourseSection(),
		createDesertsSection(),
	);

	//Styling

	return menu;
}

function createMenuPageHeading() {
	const menuHeading = createElement("div", "", "menu-heading"); // Parent

	const span = createElement("span", "Discover Our Flavours");
	const heading = createElement("h1", "Our Menu");
	const headDescr = createElement(
		"p",
		"Fresh ingredients, delicious recipes and a little love in every dish. Something special for every appetite.",
	);
	const headingLine = createElement("div", "", "heading-line");

	menuHeading.append(span, heading, headDescr, headingLine);

	// Styling

	return menuHeading;
}

function createStaterSection() {
	const section = createElement("section", "", "menu-section"); // Parent

	const heading = createSecHeading(menuSecHeadings.starters);

	const dishGrid = createElement("div", "", "dish-grid"); // Parent

	const starterDishes = [
		{
			img: {
				src: "./assets/bruschetta.jpg",
				alt: "Tomato bruschetta",
			},
			dishTitleDiv: {
				h3: "Tomato Bruschetta",
				span: "$8",
			},
			p: "Toasted bread topped with fresh tomatoes, basil and olive oil.",
		},
		{
			img: {
				src: "./assets/mushroom-soup.jpg",
				alt: "Creamy mushroom soup",
			},
			dishTitleDiv: {
				h3: "Creamy Mushroom Soup",
				span: "$7",
			},
			p: "A rich and comforting soup made with fresh mushrooms and herbs.",
		},
		{
			img: {
				src: "./assets/garlic-bread.jpg",
				alt: "Garlic bread",
			},
			dishTitleDiv: {
				h3: "Garlic Bread",
				span: "$6",
			},
			p: "Freshly baked bread with garlic butter and aromatic herbs.",
		},
		{
			img: {
				src: "./assets/chicken-wings.jpg",
				alt: "Grilled chicken wings",
			},
			dishTitleDiv: {
				h3: "Grilled Chicken Wings",
				span: "$10",
			},
			p: "Juicy chicken wings coated in our signature house sauce.",
		},
	];

	for (let i = 0; i < starterDishes.length; i++) {
		dishGrid.append(createDish(starterDishes[i]));
	}

	section.append(heading, dishGrid);

	// Styling

	return heading;
}

function createMainCourseSection() {
	const section = createElement("section", "", "menu-section"); // Parent

	const heading = createSecHeading(menuSecHeadings.mainCourse);

	const dishGrid = createElement("div", "", "dish-grid"); // Parent

	const mainCourseDishes = [
		{
			img: {
				src: "./assets/grilled-chicken.jpg",
				alt: "Grilled chicken",
			},
			dishTitleDiv: {
				h3: "Herb Grilled Chicken",
				span: "$18",
			},
			p: "Grilled chicken breast served with seasonal vegetables and herbs.",
		},
		{
			img: {
				src: "./assets/beef-steak.jpg",
				alt: "Beef steak",
			},
			dishTitleDiv: {
				h3: "Classic Beef Steak",
				span: "$24",
			},
			p: "Tender beef steak cooked to perfection with roasted potatoes.",
		},
		{
			img: {
				src: "./assets/pasta.jpg",
				alt: "Creamy pasta",
			},
			dishTitleDiv: {
				h3: "Creamy Alfredo Pasta",
				span: "$16",
			},
			p: "Italian pasta tossed in a creamy parmesan and garlic sauce.",
		},
		{
			img: {
				src: "./assets/vegetable-risotto.jpg",
				alt: "Vegetable risotto",
			},
			dishTitleDiv: {
				h3: "Garden Vegetable Risotto",
				span: "$15",
			},
			p: "Creamy rice cooked with fresh seasonal vegetables and parmesan.",
		},
	];

	for (let i = 0; i < mainCourseDishes.length; i++) {
		dishGrid.append(createDish(mainCourseDishes[i]));
	}

	section.append(heading, dishGrid);

	// Styling

	return heading;
}

function createDesertsSection() {
	const section = createElement("section", "", "menu-section"); // Parent

	const heading = createSecHeading(menuSecHeadings.deserts);

	const dishGrid = createElement("div", "", "dish-grid"); // Parent

	const deserts = [
		{
			img: {
				src: "./assets/grilled-chicken.jpg",
				alt: "Grilled chicken",
			},
			dishTitleDiv: {
				h3: "Herb Grilled Chicken",
				span: "$18",
			},
			p: "Grilled chicken breast served with seasonal vegetables and herbs.",
		},
		{
			img: {
				src: "./assets/beef-steak.jpg",
				alt: "Beef steak",
			},
			dishTitleDiv: {
				h3: "Classic Beef Steak",
				span: "$24",
			},
			p: "Tender beef steak cooked to perfection with roasted potatoes.",
		},
		{
			img: {
				src: "./assets/pasta.jpg",
				alt: "Creamy pasta",
			},
			dishTitleDiv: {
				h3: "Creamy Alfredo Pasta",
				span: "$16",
			},
			p: "Italian pasta tossed in a creamy parmesan and garlic sauce.",
		},
		{
			img: {
				src: "./assets/vegetable-risotto.jpg",
				alt: "Vegetable risotto",
			},
			dishTitleDiv: {
				h3: "Garden Vegetable Risotto",
				span: "$15",
			},
			p: "Creamy rice cooked with fresh seasonal vegetables and parmesan.",
		},
	];

	for (let i = 0; i < deserts.length; i++) {
		dishGrid.append(createDish(deserts[i]));
	}

	section.append(heading, dishGrid);

	// Styling

	return heading;
}

// Helper Functions
function createDish(obj) {
	const dishCard = createElement("article", "", "dish-card"); // Parent

	const dishPicture = new URL(obj.img.src, import.meta.url);
	const dishImg = createElement("img");
	dishImg.src = dishPicture.href;
	dishImg.alt = obj.img.alt;

	const dishInfo = createElement("div", "", "dish-info"); // Parent

	const dishTitle = createElement("div", "", "dish-title"); // Parent
	const dishHeading = createElement("h3", obj.dishTitleDiv.h3);
	const price = createElement("span", obj.dishTitleDiv.span);
	const dishDesc = createElement("p", obj.p);

	dishTitle.append(dishHeading, price);

	dishInfo.append(dishTitle, dishDesc);

	dishCard.append(dishImg, dishInfo);

	// Styling

	return dishcard;
}

function createSecHeading(obj) {
	const heading = createElement("div", "", "section-heading"); // Parent

	const span = createElement("span", obj.span);
	const headingText = createElement("h2", obj.h2);
	const headDescr = createElement("p", obj.p);

	heading.append(span, headingText, headDescr);

	// Styling

	return heading;
}
