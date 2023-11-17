const hamburgerBtn = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav-mobile__list");
const navLink = navList.querySelectorAll("a");
const navLogo = document.querySelector(".nav__logo");
const navLinkDesktop = document.querySelectorAll(".nav-desktop__link");
const element = document.getElementById("HTML element");
const footerDate = document.querySelector(".footer--date");
const sectionID = document.querySelectorAll("#home, #about-us, #offer");
const label = document.querySelectorAll("label");
const contactLink = document.querySelector(".nav-desktop__link--contact");


hamburgerBtn.addEventListener("click", () => {
	navList.classList.toggle("nav-mobile__list--active");
	document.body.classList.toggle("lock-scroll");
	hamburgerBtn.classList.toggle("nav__hamburger--active");
});
navLink.forEach((n) => {
	n.addEventListener("click", () => {
		navList.classList.toggle("nav-mobile__list--active");
		if (hamburgerBtn.classList.contains("nav__hamburger--active") == true) {
			hamburgerBtn.classList.remove("nav__hamburger--active");
			document.body.classList.remove("lock-scroll");
		} else {
			return 0;
		}
	});
});

navLogo.addEventListener("click", () => {
	if (hamburgerBtn.classList.contains("nav__hamburger--active") == true) {
		navList.classList.remove("nav-mobile__list--active");
		document.body.classList.remove("lock-scroll");
		hamburgerBtn.classList.remove("nav__hamburger--active");
	}
});

// YEAR Footer

let year = new Date().getFullYear();
footerDate.textContent = `${year}`;

// ScrollSpy

window.addEventListener("scroll", () => {
	sectionID.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 30;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if (top >= offset && top < offset + height) {
			navLinkDesktop.forEach((link) => {
				link.classList.remove("nav--active");
				document
					.querySelector(".nav-desktop__list a[href*=" + id + "]")
					.classList.add("nav--active");
			});
		}
	});
});

