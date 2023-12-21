"use strict"

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu-header__body');

burger.addEventListener("click", function () {
	burger.classList.toggle('header__burger_active');
	menu.classList.toggle('menu-header__body_active');
})

document.querySelectorAll('.footer-top__title').forEach((el) => {
	el.addEventListener('click', () => {
		el.classList.toggle("footer-top__title_active");
		let content = el.nextElementSibling;
		if (content.style.maxHeight) {
			document.querySelectorAll('.footer-top__content').forEach((el) => el.style.maxHeight = null);
		} else {
			document.querySelectorAll('.footer-top__content').forEach((el) => el.style.maxHeight = null);
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	})
})