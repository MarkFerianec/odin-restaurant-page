// function printMe() {
//     console.log('test');
// }

// export { printMe };

import './style.css';
import coffee from './coffee.jpg';

function home() {
    const content = document.querySelector('#content');

    content.classList.add('flex-settings');

    // menu bar
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

    // title
    const title = document.createElement('div');

    content.appendChild(title);

    title.textContent = "Lorem Ipsum Restaurant";

    title.classList.add('title');

    // description
    const description = document.createElement('div');

    content.appendChild(description);

    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt tempor libero et bibendum.Donec et nulla sit amet nisi pellentesque tincidunt.Phasellus mattis accumsan auctor.Integer vulputate metus leo, et bibendum nisi pulvinar nec.Aliquam eros magna, tristique vitae sapien ac, dapibus imperdiet lorem.";

    description.classList.add('description');

    // image
    const picture = new Image();
    picture.src = coffee;

    content.appendChild(picture);

    picture.classList.add('image-settings');

    // credit to author of picture (Caleb on Unsplash)
    const photoCredit = document.createElement('p');
    content.appendChild(photoCredit);
    photoCredit.textContent = "Photo by Caleb on Unsplash";

    // https://unsplash.com/@calebrussell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    // https://unsplash.com/photos/white-ceramic-cup-with-saucer-on-brown-wooden-table-_hnL_961xTk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
}

export { home };


