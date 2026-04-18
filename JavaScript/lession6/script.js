// // function welcome(){  // параметр функцим
// //     console.log("Hello");
// // }; 




// // welcome();  // аргумент функции
// getName("Alex");


// function getName(userName){
//     return document.body.innerHTML += `<h1>Hello, ${userName}!</h1>`;
//     // console.log("Alex"); - после return код не работает!
// };

// getName(); // вызов функции
// getName;   // ссылка на функция



// welcome(); - в функциях которые присвоины к переменным так делать нельзя!!!!

// const welcome = function(){
//     console.log("Hello");
//     // return document.body.innerHTML += "Hello!"
//     return "Hello!"
// };

// console.log(welcome);
// document.body.innerHTML = welcome();


// const welcome = () => {
//     return "Hello!"
// };
// const welcome = () => `Hello`;

// const welcome = name => `Hello, ${name}`;

// welcome();



// const userNumber = Number(prompt("Enter the number"))

// function isOdd(number){
//     if(number % 2 === 0){
//         return "Число чётное"
//     } else {
//         return "Число нечётное"
//     }
// };

// // const a = 15;
// // document.body.innerHTML += `<div>${isOdd(a)}</div>`;


// // console.log(isOdd(userNumber));

// console.log(isOdd(Number(prompt("Enter the number"))));


// import isOdd from "https://esm.sh/is-odd";

// // import isOdd from "is-odd";  - используеться только вмести со сборщиками

// function checkIsOdd(number){
//     return isOdd(number)
// };


// document.body.innerHTML += `<div>${checkIsOdd(15) ? "НЕ чётное" : "чётное"}</div>`;



// import { rent } from './rent.js';   // named import





// import params from './rent.js';  // default мы аонимаем что импортируем обьект с нашими переменными

// console.log(params.text);
// console.log(params.num);
// console.log(params.arr);


// const {text, num, arr } = params;
// console.log(text);
// console.log(num);
// console.log(arr);

import { renderApartmanet } from "./apartments.js";
import { rent } from "./rent.js";

renderApartmanet(rent)



// const welcome = (name="Farid") =>{
//     return `Welcome ${name}`;
// };

// document.body.innerHTML += `<h1>${welcome()}</h1>`;   // Welcome Farid
// document.body.innerHTML += `<h1>${welcome("Vlad")}</h1>`; // Welcome Vlad

// function sum(a, b=15){
//     return a + b;
// };

// console.log(sum(4)); // 4 + 15 = 19
// console.log(sum(4, 7)); // 7 + 4 = 11


// function sum(a, b=78, ...other){
//     console.log(other) // array 
//     return a + b + other
// };

// console.log(sum(4)); // 4 + 15 = 19
// console.log(sum(4, 7)); // 7 + 4 = 11
// console.log(sum(14, 45)); // то есть остальные парв=амеиры это масив значений