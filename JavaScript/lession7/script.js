// function welcome(name, callBack){
//      callBack(name);
// };

// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }

// welcome("Alex", sayHello);

// array.forEach(((element, index) => {
//    console.log(index, element);
// }
// );

// const fruits = ["apple", "banana", "orange"];
// fruits.forEach((el, i) => {
//   console.log(`${el} - это элемент; ${i} - это номер индекса;`);
//   document.body.innerHTML += `<ul>
//                                 <li>${el}</li>
//                             </ul>
//                             `;
// });

// const users = [
//     {id: 1, name: "Farid", age: 40, role: "admin"},
//     {id: 2, name: "Ihtiar", age: 32, role: "support"},
//     {id: 3, name: "Vlad", age: 28, role: "sale"},
//     {id: 4, name: "Liana", age: 38, role: "user"},
//     {id: 5, name: "Olena", age: 38, role: "user"},
//     {id: 6, name: "Dima", age: 38, role: "user"},
//     {id: 7, name: "Adil", age: 28, role: "sale"},
// ];

// users.forEach(el =>{
//     if(el.role === "user"){
//         console.log(`Список людей у которых статус "user": ${el.name}`)
//     }
// });

// const listSales = users.map(el => ({
//    ...el,
//    isSale: el.role === "sale"
// })
// );

// console.log(listSales)

// const fruits = ["apple", "banana", "orange"];

// const post = fruits.map(fruit => `<div>${fruit}</div>`).join("")

// document.body.innerHTML = post;
// console.log(post);


// const prices = [100, 150, 80, 95];
// const discountPrices = []

// prices.forEach(el => {
//     const newPrice = el * 0.9;
//     discountPrices.push(newPrice);
// })

// console.log(discountPrices);

// const discountPrices = prices.map(el => el * 0.9);
// console.log(discountPrices);


// const products = ["хлеб", "молоко", "йогурт", "картофель", "морковь"];
// const newList = products.filter(product => product !== "йогурт");

// console.log(newList);


// const foundProduct = products.find(product => product.length >= 6);
// console.log(foundProduct); // 

// const foundProductIndex = products.findIndex(product => product.length >= 6);
// console.log(foundProductIndex);

// const numbers = [17, 587, -789, 28, 361];
// const allEven = numbers.every(num => num % 2 == 0);
// console.log(allEven) // false

// const oneEven = numbers.some(num => num % 2 == 0);
// console.log(oneEven) // true

// const sorted = numbers.sort((a, b) => a - b ); // в порядке возрастания
// console.log(sorted);

// const sorted = numbers.sort((a, b) => b - a ); // в порядке убывания
// console.log(sorted);

// const orders = [{ total: 100 }, { total: 50 }];
// const sum = orders.reduce((acc, order) => acc + order.total, 0); // 150

// const numbers = [17, 587, -789, 28, 361];
// const sum = numbers.reduce((total, el) => total + el, 0);
// console.log(sum); // 204


// const user = {
//     name: "Alex",
//     age: 25,
//     welcome(){
//         console.log(`Пользователь ${this.name} с возрастом ${this.age} лет`)
//     }
// };

// user.welcome();  // this === user{}

// const books = {
//     authors: ["Jack London", "Bozena Nemcova", "Karl Capek"],
//     getAuthors(){
//         return this.authors;
//     },
//     addAuthor(name){
//         this.authors.push(name)
//     }   
// };

// console.log(books.getAuthors()); //
// console.log(books.addAuthor("Stekhem"));
// console.log(books.getAuthors());

// const studio = {
//     name: "Marvel",
//     heros: ["Iron Man", "Spider Man", "Hulk", "Tor"],

//     showHeros() {
//         this.heros.forEach(el => {
//             console.log(`Stuio: ${this.name}, ${el}`)
//         });
//     }
// };

// const studio = {
//     name: "Marvel",
//     heros: ["Iron Man", "Spider Man", "Hulk", "Tor"],

//     showHeros() {
//         this.heros.forEach(function(el){
//             console.log(`Stuio: ${studio.name}, ${el}`)
//         });
//     }
// };

// studio.showHeros()


// setTimeout и setInterval

// setTimeout(()=>{
//     console.log("Прошло 2 секунды");
// }, 2000);

// console.log("HEllo");

// setInterval(()=>{
//     console.log("Прошло 2 секунды")
// }, 1000);

// console.log("HEllo");

// let initialTimer = 5;

// const interval = setInterval(()=>{
//     console.log(initialTimer);
//     initialTimer--;
//     if(initialTimer === 0){
//         console.log("Time out!");
//         clearInterval(interval);
//     }
// }, 1000);


const network = [
    {id:1, name: "Alex", post: "Hello" },
    {id:2, name: "Farid", post: "Good Day" },
    {id:3, name: "Adil", post: "Morning" },
    {id:4, name: "Vlad", post: "Hi" },
];

const posts = network.map(el => {
    return `<div>${el.name}: ${el.post}</div>`
}).join("");

// document.body.innerHTML = posts;

const newPost = network.filter(post => post.id !== 3);

// document.body.innerHTML = newPost.join("");

console.log(newPost);


