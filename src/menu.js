import './style.css';

function menu() {

    const homeContainer = document.querySelector('.home-container');
    homeContainer.remove();

    const title = document.createElement('div');

    content.appendChild(title);

    title.textContent = "Menu";

    title.classList.add('title');
}

export { menu };
