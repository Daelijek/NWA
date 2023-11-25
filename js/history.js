window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}

document.getElementById("sendButton").addEventListener("click", function () {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const subject = document.getElementById("subject").value;
	const message = document.getElementById("message").value;

	// Reset error messages
	document.getElementById("nameError").textContent = "";
	document.getElementById("emailError").textContent = "";
	document.getElementById("subjectError").textContent = "";
	document.getElementById("messageError").textContent = "";

	let valid = true;

	if (name.trim() === "") {
		document.getElementById("nameError").textContent = "Name is required.";
		valid = false;
	}

	if (email.trim() === "") {
		document.getElementById("emailError").textContent = "Email is required.";
		valid = false;

	} else if (!validateEmail(email)) {
		document.getElementById("emailError").textContent = "Invalid email format.";
		valid = false;
	}

	if (subject.trim() === "") {
		document.getElementById("subjectError").textContent = "Subject is required.";
		valid = false;
	}

	if (message.trim() === "") {
		document.getElementById("messageError").textContent = "Message is required.";
		valid = false;
	}

	if (valid) {
		// Form is valid, you can proceed with form submission or other actions
		alert("Form submitted successfully!");
		// Clear form fields
		document.getElementById("contactForm").reset();
	}
});

function validateEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

//! show card description
function showCardDescription(card) {
	const description = card.querySelector(".description");
	description.style.opacity = "1";
}

function hideCardDescription(card) {
	const description = card.querySelector(".description");
	description.style.opacity = "0";
}