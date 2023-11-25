function contact() {

    const content = document.querySelector('#content');

    content.classList.add('flex-settings');

    const page = document.createElement('div');
    page.classList.add('page');

    page.classList.add('flex-settings');

    const title = document.createElement('div');

    page.appendChild(title);

    title.textContent = "Contact Us";

    title.classList.add('title');

    const contactName = document.createElement('p');
    const contactNumber = document.createElement('p');

    page.append(contactName);
    page.append(contactNumber);

    contactName.classList.add('description');

    contactName.textContent = 'Ut eu mauris efficitur, finibus ligula eget, pretium tortor.';
    contactNumber.textContent = '555-555-5555';

    content.appendChild(page);
}

export { contact };