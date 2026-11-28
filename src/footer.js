import createElement from "./helper-functions.js";

export default function createFooter() {
	const footer = createElement("footer", "", "", "footer"); // Parent

	let footerSec1 = createElement("div", "", "footer-section");

	const sec1Heading = createElement("h3", "★ Quick Links");
	footerSec1.append(sec1Heading);

	const sec1Links = [
		"› This Week Special",
		"› Breakfast Menu",
		"› Sweet Dishes",
		"› Organically Grown Food",
		"› Blog",
	];

	footerSec1 = createLinks(footerSec1, sec1Links);

	let footerSec2 = createElement("div", "", "footer-section");

	const sec2Heading = createElement("h3", "❧ More Info");
	footerSec2.append(sec2Heading);

	const sec2Links = [
		"› Sustainability Policy",
		"› Bookings",
		"› Complaint or Suggestions",
		"› Contact Us",
		"› Follow us on Social",
	];

	footerSec2 = createLinks(footerSec2, sec2Links);

	const copyRight = createElement(
		"div",
		"© The Good Fork. All rights reserved.",
		"copyright",
	);

	const social = createSocialLinks();

	footer.append(footerSec1, footerSec2, social, copyRight);

	// Styling

	footerSec1.style.cssText = `display: flex;
	flex-direction: column;
	gap: 5px;`;

	footerSec2.style.cssText = `display: flex;
	flex-direction: column;
	gap: 5px;`;

	sec1Heading.style.cssText = `color: var(--color2);
	font-size: 25px;
	margin: 0 0 5px;`;

	sec2Heading.style.cssText = `color: var(--color2);
	font-size: 25px;
	margin: 0 0 5px;`;

	copyRight.style.cssText = `grid-column: 1 / -1;
	border-top: 2px solid var(--color6);
	padding-top: 15px;
	text-align: center;
	font-size: 16px;`;

	return footer;
}

function createSocialLinks() {
	const social = createElement("div", "", "social-links");
	const socialLinks = ["f", "◎", "▶", "𝕏"];
	for (let i = 0; i < socialLinks.length; i++) {
		const link = createElement("a", socialLinks[i]);

		// Styling

		link.style.cssText = `width: 50px;
				height: 50px;
				background-color: var(--color5);
				color: var(--color1);
				border-radius: 50%;
				display: grid;
				place-items: center;
				text-decoration: none;
				font-family: Arial, sans-serif;
				font-size: 25px;
				font-weight: bold;
				transition: 0.3s;`;

		social.append(link);
	}

	// Styling

	social.style.cssText = `display: flex;
	align-items: center;
	justify-content: center;
	gap: 18px;`;

	return social;
}

// Helper Function
function createLinks(section, linksArray) {
	// Section is passed along here to append the links in

	for (let i = 0; i < linksArray.length; i++) {
		const link = createElement("a", linksArray[i]);

		// Styling

		link.style.cssText = `color: var(--color5);
						text-decoration: none;
						font-size: 18px;
						transition: 0.2s;`;

		section.append(link);
	}

	return section;
}
