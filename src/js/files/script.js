// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu__link')) {
		console.log(targetElement);
		const menuItem = targetElement.closest('.menu__item')
		console.log(menuItem);
		menuItem.querySelector('.submenu').classList.toggle('_open')
	}
}