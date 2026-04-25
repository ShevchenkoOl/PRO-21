// const btn = document.querySelector('#btn');
// const span = document.querySelector('#span');
// // console.log(span.textContent);

// let result = 0;

// function handleClick(){
//     console.log("Button was pressed!");
//     result++;
//     span.textContent = result;
// }

// // btn.addEventListener("click", handleClick, {once:true});

// btn.addEventListener("mouseup", handleClick);

// const firstCallback = () => console.log("First callback!");
// const secondCallback = () => console.log("Second callback!");

// const removeSecondCallback = () => {
//   console.log("СРАБОТАЛ КЛИК — второй колбэк будет удалён");
//   btn.removeEventListener("click", secondCallback);
//   btn.removeEventListener("click", removeSecondCallback); // Удаляет сам себя
// };

// btn.addEventListener("click", firstCallback);
// btn.addEventListener("click", secondCallback);
// btn.addEventListener("click", removeSecondCallback);

// const input = document.querySelector('#input');

// input.addEventListener("input", () => {
// console.log(input.value);
// })

// input.addEventListener("change", () => {
// console.log(input.value);
// })

// const form = document.querySelector("#form");
// const inputName = document.querySelector("#name");
// const inputEmal = document.querySelector("#email");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // console.log("Send");
//     // console.log(inputEmal.value);
//     // console.log(inputName.value);
//     // inputEmal.value = '';
//     // inputName.value = '';

//     console.log(event);
// })

// const list = document.querySelector('.list');
// list.addEventListener("click", (e)=>{
//     console.log("e.target", e.target);
//     console.log("e.currenTarget", e.currentTarget);
// })

// const spinner = document.getElementById('spinner');
// const content = document.getElementById('main-content');

// // Ждем полной загрузки всех файлов и картинок
// window.addEventListener('load', () => {
//     // Прячем спиннер
//     spinner.classList.add('hidden');
//     // Показываем контент
//     content.classList.remove('hidden');
// });

let products = [
  { id: 1, name: "Ноутбук", price: 1500, isFavorite: false, isAvailable: true },
  { id: 2, name: "Мышка", price: 50, isFavorite: true, isAvailable: false },
  {
    id: 3,
    name: "Клавиатура",
    price: 100,
    isFavorite: false,
    isAvailable: true,
  },
];

// let products = {
//     id: 1,
//     name: "Ноутбук",
//     price: 1500,
//     isFavorite: false,
//     isAvailable: false
// }

// fotEach - append
// map - array - > str - > insertAdjacentHTML("", "")

const container = document.querySelector("#products-container");
const btnShowAll = document.querySelector("#show-all");
const btnShowFavs = document.querySelector("#show-favs");

btnShowFavs.addEventListener("click", () => {
  container.textContent = `Была нажата кнопка ${btnShowFavs.textContent}`;
});

// const list = document.createElement("ul");
// container.insertAdjacentElement("afterbegin", list);

const available = `<div class="status green"></div>`;
const notAvailable = `<div class="status red"></div>`;

function renderAll(){
    return  products.forEach((product) => {
    container.insertAdjacentHTML("afterbegin",`<li>
    <p>${product.name}</p>
    <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
    </li>
`);

  });
}

// btnShowAll.addEventListener("click", () => {
//   // container.textContent = `Была нажата кнопка ${btnShowAll.textContent}`
//   // container.textContent = products.name;
//   // container.insertAdjacentHTML("afterbegin", `<p style={display:flex; flex-direction: row}>${products.name} <span>${products.price}</span>${products.isAvailable ? available : notAvailable}</p>`);
//   products.forEach((product) => {
//     container.insertAdjacentHTML("afterbegin",`<li>
//     <p>${product.name}</p>
//     <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
//     </li>
// `);

//   });
// });

 btnShowAll.addEventListener("click", renderAll)

// container.append(list);

// function renderAll() {
//   list.innerHTML = "";
//   const render = products
//     .map((product) => {
//       return `<li>
//     <p>${product.name}</p>
//     <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
//     </li>`;
//     })
//     .join("");

//   list.insertAdjacentHTML("afterbegin", render);
// }

// function renderFavorite() {
//   list.innerHTML = "";
//  const render = products
//     .filter(product => product.isFavorite)
//     .map(product => `
//       <li>
//         <p>${product.name}</p>
//         <p>${product.price} ${product.isAvailable ? available : notAvailable}</p>
//       </li>
//     `)
//     .join("");

//   list.insertAdjacentHTML("afterbegin", render);
// }

// btnShowAll.addEventListener("click", renderAll);
// btnShowFavs.addEventListener("click", renderFavorite);
