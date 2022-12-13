import menu from './menu.json';
import itemsMenu from './menu-items.hbs';

const menuEl = document.querySelector('.js-menu');

const markup = itemsMenu(menu);
menuEl.insertAdjacentHTML('beforeend', markup);
