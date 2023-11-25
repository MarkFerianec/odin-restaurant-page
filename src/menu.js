// import './style.css'; // Is this necessary?

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

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    page.appendChild(li1);
    page.appendChild(li2);
    page.appendChild(li3);

    li1.classList.add("description");

    li1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    li2.textContent = 'Nunc at purus commodo, interdum urna vitae, molestie nibh.';
    li3.textContent = 'Maecenas tincidunt erat sed magna finibus gravida sit amet a urna.';

    content.appendChild(page);
}

export { menu };
