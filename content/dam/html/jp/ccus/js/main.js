function toggleNav() {
	let body = document.body;
	let hamburger = document.getElementById("js_hamburger");

	hamburger.addEventListener("click", function () {
		body.classList.toggle("nav_open");
		body.classList.toggle("noscroll");
	});
}
toggleNav();