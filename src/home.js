import './style.css';
import coffee from './coffee.jpg';

function home() {

    const homeContainer = document.createElement('div');

    homeContainer.classList.add('home-container');

    homeContainer.classList.add('flex-settings');

    content.appendChild(homeContainer);

    const title = document.createElement('div');

    homeContainer.appendChild(title);

    title.textContent = "Lorem Ipsum Restaurant";

    title.classList.add('title');

    // description
    const description = document.createElement('div');

    homeContainer.appendChild(description);

    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt tempor libero et bibendum. Donec et nulla sit amet nisi pellentesque tincidunt. Phasellus mattis accumsan auctor. Integer vulputate metus leo, et bibendum nisi pulvinar nec. Aliquam eros magna, tristique vitae sapien ac, dapibus imperdiet lorem.";

    description.classList.add('description');

    // image
    const picture = new Image();
    picture.src = coffee;

    homeContainer.appendChild(picture);

    picture.classList.add('image-settings');

    // credit to author of picture (Caleb on Unsplash)
    const photoCredit = document.createElement('p');
    homeContainer.appendChild(photoCredit);
    photoCredit.textContent = "Photo by Caleb on Unsplash";

    // https://unsplash.com/@calebrussell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    // https://unsplash.com/photos/white-ceramic-cup-with-saucer-on-brown-wooden-table-_hnL_961xTk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
}

export { home };


