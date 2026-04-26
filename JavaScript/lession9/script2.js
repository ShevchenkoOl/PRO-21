let products = [
  { id: 1, name: "Ноутбук", price: 1500, isFavorite: false, isAvailable: true },
  { id: 2, name: "Мышка", price: 50, isFavorite: true, isAvailable: false },
  { id: 3, name: "Клавиатура", price: 100, isFavorite: false, isAvailable: true },
  { id: 4, name: "Монитор", price: 1100, isFavorite: true, isAvailable: false },
  { id: 5, name: "Принтер", price: 2500, isFavorite: true, isAvailable: true },
];

const available = `<span class="status green"></span>`;
const notAvailable = `<span class="status red"></span>`;

// 1 - отрисовать список продуктов на странмце (найти контейнер, вставляем список(создаем сам список ul и вешаем его в найденый контейнер), перебираем массив товаров (forEach, map) и на каждый елемент массива создаём li, все сознанные лигки мы вешаем в наш список).

// 2 - создать слушатель события на статестические кнопки (показать всё, показать только избранное)(найти кнопки)

const container = document.querySelector('#products-container');
const btnShowAll = document.querySelector('#show-all');
const btnShowFav = document.querySelector('#show-favs');
const input = document.querySelector('#input');
console.log(input);

const list = document.createElement('ul');

container.append(list);
// container.insertAdjacentElement("", "")

function showAll(){
list.innerHTML = '';
const productsCard = products.map(product => {
    return `
        <li>
        <p>${product.name}</p>
        <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
        <button id="del${product.id}" data-id="${product.id}" class="delete">Delete</button>
        <button id="fav${product.id}" data-id="${product.id}" class="favorite">${product.isFavorite ? '❤️ Убрать' : '🤍 В избранное'}</button>
        </li>
    `;
}).join('');

list.insertAdjacentHTML("afterbegin", productsCard);
}

function ShowFav(){
    list.innerHTML = '';
    const favorites = products.filter(product => product.isFavorite);

    const productsCard = favorites.map(product => {
    return `
        <li>
        <p>${product.name}</p>
        <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
        <button id="del${product.id}" data-id="${product.id}" class="delete">Delete</button>
        <button id="fav${product.id}" data-id="${product.id}" class="favorite">${product.isFavorite ? '❤️ Убрать' : '🤍 В избранное'}</button>
        </li>
    `;
}).join('');
list.insertAdjacentHTML("afterbegin", productsCard); 
}

btnShowAll.addEventListener("click", showAll)
btnShowFav.addEventListener("click", ShowFav)

list.addEventListener("click", (event)=>{
    list.innerHTML = '';
if(event.target.classList.contains("delete")){
    const id = event.target.dataset.id;
    products = products.filter(product => product.id != id);
    const correctArray =  products.map(product => {
    return `
        <li>
        <p>${product.name}</p>
        <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
        <button id="del${product.id}" data-id="${product.id}" class="delete">Delete</button>
        <button id="fav${product.id}" data-id="${product.id}" class="favorite">${product.isFavorite ? '❤️ Убрать' : '🤍 В избранное'}</button>
        </li>
    `;
}).join('');
list.insertAdjacentHTML("afterbegin", correctArray); 
}
})


input.addEventListener('input', () => {

  list.innerHTML = '';
  
   const newArray = products.filter(product =>
    product.name.includes(input.value)
   );

   const correctArray =  newArray.map(product => {
    return `
        <li>
        <p>${product.name}</p>
        <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
        <button id="del${product.id}" data-id="${product.id}" class="delete">Delete</button>
        <button id="fav${product.id}" data-id="${product.id}" class="favorite">${product.isFavorite ? '❤️ Убрать' : '🤍 В избранное'}</button>
        </li>
    `;
}).join('');
list.insertAdjacentHTML("afterbegin", correctArray); 
})

// const btnsDelete = document.querySelectorAll(".btn");
// console.log(btnsDelete);
// btnsDelete.forEach(btn => {
    
// });






