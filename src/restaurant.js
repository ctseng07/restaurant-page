import newMbaku from './img/mbaku.png';

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const Mbaku = document.createElement('img');
    Mbaku.src = newMbaku;
    Mbaku.height = '300';
    pageContent.appendChild(Mbaku);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'sayin1';
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'saying 2';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;