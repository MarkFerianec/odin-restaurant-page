import './style.css';

function menu() {

    const content = document.querySelector('#content');

    content.classList.add('flex-settings');

    const page = document.createElement('div');
    page.classList.add('page');

    page.classList.add('flex-settings');

    const title = document.createElement('div');

    page.appendChild(title);

    title.textContent = "Menu";

    title.classList.add('title');

    content.appendChild(page);
}

export { menu };
