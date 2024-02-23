var form_button = document.querySelector(".form-button");
var submit = document.querySelector(".contacts-form");
var form_submit = document.querySelector(".button-submit");
var write_us = document.querySelector(".write-us");
var modal_close = document.querySelector(".modal-close");
var login = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var message = document.querySelector(".text-area-name");
var slide_1 = document.querySelector(".block-hero-1");
var slide_2 = document.querySelector(".block-hero-2");
var slide_3 = document.querySelector(".block-hero-3");
var slide_btn_1 = document.querySelector(".slide-btn-1");
var slide_btn_2 = document.querySelector(".slide-btn-2");
var slide_btn_3 = document.querySelector(".slide-btn-3");
var control = document.querySelector(".slider-controls__button__active");


submit.disabled = !form_submit.checkValidity();
form_button.addEventListener("click", function () {
	write_us.classList.remove("write-us-hide");
	write_us.classList.add("write-us-show");
	if (!login.value) {
		login.focus();
	}else {
		email.focus();
	}
})

modal_close.addEventListener("click", function () {
	write_us.classList.remove("write-us-show");
	write_us.classList.add("write-us-hide");
})

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (write_us.classList.contains("write-us-show")) {
			evt.preventDefault();
			write_us.classList.remove("write-us-show");
		}
	}
});

slide_btn_1.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide_1.classList.add("slide-show");
	slide_2.classList.remove("slide-show");
	slide_3.classList.remove("slide-show");
	slide_btn_1.classList.add("slider-controls__button__active");
	slide_btn_2.classList.remove("slider-controls__button__active");
	slide_btn_3.classList.remove("slider-controls__button__active");

})

slide_btn_2.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide_1.classList.remove("slide-show");
	slide_2.classList.add("slide-show");
	slide_3.classList.remove("slide-show");
	slide_btn_1.classList.remove("slider-controls__button__active");
	slide_btn_2.classList.add("slider-controls__button__active");
	slide_btn_3.classList.remove("slider-controls__button__active");
})

slide_btn_3.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide_1.classList.remove("slide-show");
	slide_2.classList.remove("slide-show");
	slide_3.classList.add("slide-show");
	slide_btn_1.classList.remove("slider-controls__button__active");
	slide_btn_2.classList.remove("slider-controls__button__active");
	slide_btn_3.classList.add("slider-controls__button__active");
})