

// const listEl = document.querySelector('ul#categories');
// const amountOfChildren = listEl.children.length;
// console.log(`Number of categories: ${listEl}`);

// const liEl = listEl.children;

// for (let i = 0; i < liEl.length; i += 1){
    
//     const liChildren = liEl[i].children;
//     const text = liChildren[0].textContent;
//     console.log('Category:', text);
//     const numberOfChildren = liChildren[1].children.length;
//     console.log(`Elements: ${numberOfChildren}`);
// }

const list = document.querySelectorAll('li.item');

console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll('#categories>li');
    ul.forEach(el => {
        console.log( `Category: ${el.firstElementChild.textContent}`);
        console.log(` Elements: ${el.lastElementChild.children.length}` );
});
 