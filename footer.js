import createElement from "./helper-functions.js";

export default function createFooter() {
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
