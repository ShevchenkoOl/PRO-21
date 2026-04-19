// const divContainerById = document.getElementById('container');
// const divContainerByClass = document.getElementsByClassName('general-container');

// console.log(divContainerById);
// console.log(divContainerByClass);

// const searchByTag = document.querySelector('div');
// const searchByTagAll = document.querySelectorAll('div'); // возвращает массив найденых елементов
// console.log(searchByTagAll);

// const searchByClass = document.querySelector('.general-container');
// console.log(searchByClass);

// const searchById = document.querySelector('#container');
// console.log(searchById);

// const searchByAtt = document.querySelector('[alt="Котик"]');
// console.log(searchByAtt);

// const ul = document.querySelector('.list');
// const firstLi = ul.firstChild;
// const secondLi = firstLi.nextElementSibling

// console.log(firstLi);
// console.log(secondLi);

// const firstChild = ul.querySelectorAll('li');

// console.log(firstChild);

// const img = document.querySelector(".image");

// console.log(img.alt);
// img.alt = "notebook";
// console.log(img);

// img.src = "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-2250177045.jpg";

// const input = document.querySelector('[type="text"]');
// input.value = "Hello!";
// console.log(input.value);

// const checkBox = document.querySelector('[type="checkbox"]');
// checkBox.checked = true;

// const form = document.querySelector('form');
// form.firstChild.name = "UserName";
// console.log(form);

// const divContainerById = document.getElementById('container');
// divContainerById.textContent = "Привет друзья!"

// document.body.innerHTML = `<div class="contaoner" id="">Hello ITStep</div>`;

// document.body.innerHTML = '';

// divContainerById.style.color = "red";
// divContainerById.style.fontSize = "36px";
// divContainerById.style.border = "1px solid black";

// divContainerById.classList.add("active");
// divContainerById.classList.remove("general-container");
// divContainerById.classList.toggle("active");
// console.log(divContainerById.classList.contains("general-container"))
// divContainerById.classList.replace("general-container", "active");


// console.log(divContainerById.hasAttribute("data-welcomeText")); // true
// // console.log(divContainerById.getAttribute("data-welcomeText")); // 

// const img = document.querySelector(".image");
// console.log(img.getAttribute("width")); // 300
// img.setAttribute("width", "500");
// img.setAttribute('title', 'Милый котик');

// const paragraph = document.createElement('p');
// paragraph.classList.add("active");
// paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem culpa illum praesentium consequatur quos reiciendis optio officia nemo asperiores at impedit, pariatur dolor facere molestiae vitae nam. Dolor, autem ut.";
// paragraph.style.textTransform = "uppercase";

// // document.body.append(paragraph);
// divContainerById.append(paragraph);

// divContainerById.insertAdjacentHTML("beforebegin", "<button>Click Me</button>")

// const grapes = ['🍇 Изабелла', '🍇 Кишмиш', '🍇 Мерло', '🍇 Шардоне'];

// const container = document.querySelector("#root");
// // console.log(container);
// const ul = document.createElement("ul");
// ul.classList.add("reset");

// grapes.forEach(grapeName => {
//     const li = document.createElement("li");
//     li.textContent = grapeName;
//     ul.append(li);
// });

// container.append(ul);



// const virtualFragment = document.createDocumentFragment();
// const list = document.querySelector(".list");

// grapes.forEach(grapeName => {
//     const li = document.createElement("li");
//     li.textContent = grapeName;
//     virtualFragment.append(li);
// });

// list.append(virtualFragment);

const network = [
    {id:1, name: "Alex", post: "Hello" },
    {id:2, name: "Farid", post: "Good Day" },
    {id:3, name: "Adil", post: "Morning" },
    {id:4, name: "Vlad", post: "Hi" },
];

const container = document.querySelector("#root");
const ul = document.createElement("ul");

network.forEach(el => {
    const li = document.createElement("li");
    li.insertAdjacentHTML("beforeend", `<span>${el.name}: ${el.post}</span>`)
    ul.append(li);
});

container.append(ul);