const username = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#msg");
const submitBtn = document.querySelector(".contact__buttons--submit");
const clearBtn = document.querySelector(".contact__buttons--clear");
const popup = document.querySelector(".contact__popup");
const popupCloseBtn = document.querySelector(".popup__close");

const showError = (input, msg) => {
	const formBox = input;
	const errorMsg = input.parentElement.querySelector(".contact__text");
	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input;
	const errorMsg = input.parentElement.querySelector(".contact__text");
	errorMsg.textContent = "";
	formBox.classList.remove("error");
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} powinno zawierać minimum ${min} znaków...`
		);
	}
};

const checkMail = (email) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "E-mail jest niepoprawny");
	}
};

const checkError = () => {
	const allInputs = document.querySelectorAll("input");
	const textArea = document.querySelector(".contact__text-area");
	let errorCount = 0;
	allInputs.forEach((el) => {
		if (el.classList.contains("error")) {
			errorCount++;
		}
	});
	if (textArea.classList.contains("error")) {
		errorCount++;
	}
	console.log(errorCount);
	if (errorCount === 0) {
		popup.classList.add("show-popup");
		[username, email, message].forEach((el) => {
			el.value = "";
		});
	}
};

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm([username, email, message]);
	checkLength(username, 5);
	checkLength(message, 10);
	checkMail(email);
	checkError();
});

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();
	[username, email, message].forEach((el) => {
		el.value = "";
		clearError(el);
	});
});

popupCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	popup.classList.remove("show-popup");
});

const hamburgerBtn = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav-mobile__list");
const navLink = navList.querySelectorAll("a");

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
