const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery');

// const imgEl = document.createElement('img');
// console.log(imgEl);
// const imgElSecond = document.createElement('img');
// console.log(imgElSecond);
// const imgElThird = document.createElement('img');
// console.log(imgElThird);

// imgEl.setAttribute('alt', 'White and Black Long Fur Cat');
// imgElSecond.setAttribute('alt', 'Orange and White Koi Fish Near Yellow Koi Fish');
// imgElThird.setAttribute('alt', 'Group of Horses Running');
// imgEl.setAttribute('url', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// );
// imgElSecond.setAttribute('url', 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
// imgElThird.setAttribute('url', 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

const image = images
  .map((item) => `<li> <img src = "${item.url}" alt = "${item.alt}"  width = "250" height = "150" /> </li> `)
  .join('');

  ulEl.insertAdjacentHTML( 'beforeend', image);
ulEl.style.display = 'flex';
ulEl.style.justifyContent = 'space-evenly';


