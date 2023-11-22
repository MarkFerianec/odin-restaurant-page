// import './style.css';
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const content = document.querySelector('#content');

content.classList.add('flex-settings');

// menu
const menuContainer = document.createElement('div');

content.appendChild(menuContainer);

const homeTab = document.createElement('div');
const menuTab = document.createElement('div');
const contactTab = document.createElement('div');

menuContainer.appendChild(homeTab);
menuContainer.appendChild(menuTab);
menuContainer.appendChild(contactTab);

homeTab.textContent = "home";
menuTab.textContent = "menu";
contactTab.textContent = "contact";

menuContainer.classList.add('menu-container');

home();

menuTab.addEventListener('click', menu);

// menu();
// contact();