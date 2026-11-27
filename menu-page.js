import createElement from "./helper-functions.js";

const menuSecHeadings = {
	starters: {
		span: "01",
		h2: "Starters",
		p: "A delicious beginning to your dining experience.",
	},

	mainCourse: {
		span: "03",
		h2: "Sweet Dishes",
		p: "End your meal with something wonderfully sweet.",
	},
	deserts: {
		span: "02",
		h2: "Main Course",
		p: "Hearty meals prepared with passion and fresh ingredients.",
	},
};
const dishes = {
	starters: [
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
	],
	deserts: [
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
	],
	mainCourse: [
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
	],
};

export default function createMenuPage() {
	const menu = createElement("div", "", "menu", "content");

	menu.append(
		createMenuPageHeading(),
		createStaterSection(),
		createMainCourseSection(),
		createDesertsSection(),
		createNoteSection(),
		// createFooter(),
	);

	//Styling
	menu.style.cssText = `background-color: #e4d8c7;
	padding: 45px 5%;`;

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
	menuHeading.style.cssText = `text-align: center;
	max-width: 750px;
	margin: 0 auto 55px;`;

	span.style.cssText = `color: #a44207;
	font-size: 21px;
	font-style: italic;`;

	heading.style.cssText = `color: #050302;
	font-size: 55px;
	margin: 8px 0;`;

	headDescr.style.cssText = `font-size: 19px;
	line-height: 1.6;
	color: #5c441e;`;

	headingLine.style.cssText = `width: 100px;
	height: 4px;
	background-color: #a44207;
	margin: 20px auto;`;

	return menuHeading;
}

function createStaterSection() {
	return createDishesGrid(menuSecHeadings.starters, dishes.starters);
}

function createMainCourseSection() {
	return createDishesGrid(menuSecHeadings.mainCourse, dishes.mainCourse);
}

function createDesertsSection() {
	return createDishesGrid(menuSecHeadings.deserts, dishes.deserts);
}

function createNoteSection() {
	const noteDiv = createElement("div", "", "menu-note"); // Parent

	const note = createElement("p", "✦ Good food is always worth sharing. ✦");

	noteDiv.append(note);

	// Styling
	noteDiv.style.cssText = `text-align: center;
	border-top: 2px solid var(--color6);
	padding: 20px;
	margin-top: 20px;`;

	note.style.cssText = `color: var(--color4);
	font-size: 22px;
	font-style: italic;
	text-align: center`;

	return note;
}

// Helper Functions, Each function below takes object and creates HTML elements
function createSecHeading(headingObj) {
	const heading = createElement("div", "", "section-heading"); // Parent

	const span = createElement("span", headingObj.span);
	const headingText = createElement("h2", headingObj.h2);
	const headDescription = createElement("p", headingObj.p);

	heading.append(span, headingText, headDescription);

	// Styling

	heading.style.cssText = `margin-bottom: 25px;
	border-bottom: 2px solid #a88345;
	padding-bottom: 15px;`;

	span.style.cssText = `color: #a44207;
	font-size: 17px;
	font-weight: bold;`;

	headingText.style.cssText = `color: var(--color4);
	font-size: 36px;
	margin: 5px 0;`;

	headDescription.style.cssText = `color: var(--color8);
	font-size: 17px;
	margin: 5px 0;`;

	return heading;
}

function createDishesGrid(gridHeading, dishes) {
	const section = createElement("section", "", "menu-section"); // Parent

	const heading = createSecHeading(gridHeading);

	const dishGrid = createElement("div", "", "dish-grid"); // Parent

	for (let i = 0; i < dishes.length; i++) {
		dishGrid.append(createDish(dishes[i]));
	}

	section.append(heading, dishGrid);

	// Styling
	section.style.cssText = `margin-bottom: 65px;`;

	dishGrid.style.cssText = `display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 25px;`;

	return section;
}

function createDish(dish) {
	const dishCard = createElement("article", "", "dish-card"); // Parent
	const dishPicture = new URL(dish.img.src, import.meta.url);
	const dishImg = createElement("img");
	dishImg.src = dishPicture.href;
	dishImg.alt = dish.img.alt;

	const dishInfo = createElement("div", "", "dish-info"); // Parent

	const dishTitle = createElement("div", "", "dish-title"); // Parent
	const dishHeading = createElement("h3", dish.dishTitleDiv.h3);
	const price = createElement("span", dish.dishTitleDiv.span);
	const dishDesc = createElement("p", dish.p);

	dishTitle.append(dishHeading, price);

	dishInfo.append(dishTitle, dishDesc);

	dishCard.append(dishImg, dishInfo);

	// Styling
	dishCard.style.cssText = `background-color: #f9f3e9;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
	transition:
		transform 0.3s,
		box-shadow 0.3s;`;

	dishImg.style.cssText = `width: 100%;
	height: 190px;
	object-fit: cover;
	display: block;
	margin: 0;`;

	dishInfo.style.cssText = `padding: 18px;`;

	dishTitle.style.cssText = `display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 10px;`;

	dishHeading.style.cssText = `color: var(--color4);
	font-size: 20px;
	margin: 0;`;

	price.style.cssText = `color: var(--color3);
	font-size: 19px;
	font-weight: bold;
	white-space: nowrap;`;

	dishDesc.style.cssText = `color: var(--color8);
	font-size: 15px;
	line-height: 1.5;
	margin-bottom: 0;`;

	return dishCard;
}
