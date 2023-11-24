import './style.css';
import coffee from './coffee.jpg';

function home() {

    const content = document.querySelector('#content');

    const page = document.createElement('div');
    page.classList.add('page');

    page.classList.add('flex-settings');

    const title = document.createElement('div');

    page.appendChild(title);

    title.textContent = "Lorem Ipsum Restaurant";

    title.classList.add('title');

    // description
    const description = document.createElement('div');

    page.appendChild(description);

    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt tempor libero et bibendum. Donec et nulla sit amet nisi pellentesque tincidunt. Phasellus mattis accumsan auctor. Integer vulputate metus leo, et bibendum nisi pulvinar nec. Aliquam eros magna, tristique vitae sapien ac, dapibus imperdiet lorem.";

    description.classList.add('description');

    // image
    const picture = new Image();
    picture.src = coffee;

    page.appendChild(picture);

    picture.classList.add('image-settings');

    // credit to author of picture (Caleb on Unsplash)
    const photoCredit = document.createElement('p');
    page.appendChild(photoCredit);
    photoCredit.textContent = "Photo by Caleb on Unsplash";

    // https://unsplash.com/@calebrussell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    // https://unsplash.com/photos/white-ceramic-cup-with-saucer-on-brown-wooden-table-_hnL_961xTk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"

    content.appendChild(page);
}

export { home };


