var form_button = document.querySelector(".form-button");
var form_submit = document.querySelector(".button-submit");
var write_us = document.querySelector(".write-us");
var modal_close = document.querySelector(".modal-close");
var login = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var message = document.querySelector(".text-area-name");

form_button.addEventListener("click", function () {
	write_us.classList.add("write-us-show");
	if (!login.value) {
		login.focus();
	}else {
		email.focus();
	}

})

modal_close.addEventListener("click", function () {
	write_us.classList.remove("write-us-show");
})

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (write_us.classList.contains("write-us-show")) {
			evt.preventDefault();
			write_us.classList.remove("write-us-show");
		}
	}
});