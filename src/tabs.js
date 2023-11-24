import { home } from "./home";
import { menu } from "./menu";
import './style.css';

function tabs() {

    const content = document.querySelector('#content');

    content.classList.add('flex-settings');

    // menu
    const navigation = document.createElement('div');

    navigation.classList.add('navigation');

    const homeTab = document.createElement('div');
    homeTab.classList.add('home-tab');
    const menuTab = document.createElement('div');
    menuTab.classList.add('menu-tab');
    const contactTab = document.createElement('div');
    contactTab.classList.add('contact-tab');

    navigation.appendChild(homeTab);
    navigation.appendChild(menuTab);
    navigation.appendChild(contactTab);

    homeTab.textContent = "home";
    menuTab.textContent = "menu";
    contactTab.textContent = "contact";

    content.appendChild(navigation);

    function clearAndRenderHome() {
        clear();
        home();
    }

    homeTab.addEventListener('click', clearAndRenderHome);

    function clearAndRenderMenu() {
        clear();
        menu();
    }

    menuTab.addEventListener('click', clearAndRenderMenu)

    function clear() {
        const page = document.querySelector('.page');
        content.removeChild(page);
    }
}

export { tabs };