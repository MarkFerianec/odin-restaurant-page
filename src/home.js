// function printMe() {
//     console.log('test');
// }

// export { printMe };

import './style.css';

function home() {
    const content = document.querySelector('#content');

    const menuContainer = document.createElement('div');

    content.appendChild(menuContainer);

    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    menuContainer.appendChild(home);
    menuContainer.appendChild(menu);
    menuContainer.appendChild(contact);

    home.textContent = "home";
    menu.textContent = "menu";
    contact.textContent = "contact";

    menuContainer.classList.add('menu-container');
}

export { home };


