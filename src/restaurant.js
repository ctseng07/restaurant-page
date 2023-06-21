// import paddysPubDoor from './paddysPubDoor.jpg'
// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    // const image = document.createElement('img');
    // image.src = paddysPubDoor;
    // image.height = '300';
    // pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Paddy\'s Pub';
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'New Saying';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;