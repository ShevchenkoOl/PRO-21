// const name = "Alex";
// const PI = 3.14;

// const _password = "AbCD-67@";

// let a = 45;
// a = 75;

// let c = a + a;  // c = 75 + 75

// a = "Farid";

// document.body.innerHTML += "age";
// console.log(854785);

// let d = a + "@seznam.com"; // c = Farid + @seznam.com

// var age = 15; 

// var sum = 454;

// function getSum () {
//     sum = 74
//     console.log(sum)
// }

// let total = sum + sum


// document.body.innerHTML += age;
// console.log(age);

// alert("Hello");
// confirm("Do you need continued");
// console.log("Hello World"); // node index.js


// const name = "Alex";
// // // name = "Farid";

// // console.log(name);

// let a = 15;
// a = "Farid";
// let hello = "Ahoj!";
// a = hello;
// console.log(a);

// document.body.innerHTML += "<h2 class='title'>Alex</h2>";
// document.body.innerHTML += `<h2 class='title'>${a}</h2>`; 


// let a = 15;
// let b = "Alex";
// let c = "45";

// console.log(a, typeof(a));
// console.log(b, typeof(b));
// console.log(c, typeof(c));


// let userName = prompt("Введите своё имя: ");
// document.body.innerHTML += `<h2 class='title'>Hello, ${userName}!</h2>`;
// let userAge = prompt("Введите свой возраст: ");
// console.log(typeof(userAge));

// console.log(5 + 10); // 15
// console.log("Hello" + " " + "Farid" + "!") // Hello Farid!
// console.log("Hello" + 5); // Hello5
// console.log("10" + 5); // 105
// console.log("10" + "5"); // 105

// console.log(15 - 5); //10
// console.log("Hello" -  "Farid") // Not a number
// console.log(typeof(NaN)) // number
// console.log("Hello" -  5); //NaN
// console.log("Farid " ** 5); // //NaN
// console.log("Farid" + true); // Faridtrue
// console.log(7 / 2); // 3.5
// console.log(7 % 2); // 1
// console.log(6 % 2); // 0
// console.log(3 ** "Hello"); // NaN

// ‼️📢Только + единственный оператор, который может работать со строками напрямую.📢‼️

// let userName = prompt("Vvedite svoje imja:");
// document.body.innerHTML += `<h2>Hello, ${userName}!</h2>`;
// document.body.innerHTML += "<h2>Hello</h2>" + "<h2>" + userName + "!</h2>";

// let a = 5;
// // a = a + 1; // 6

// // console.log(a += 8); // 13  a = a + 8
// // console.log(a++, a); // 6  a = a + 1
// // console.log(a); // 6

// console.log(++a); // 6

// Создание e-mail адреса: Пользователь вводит имя и фамилию через prompt. Соедините их через точку, добавьте @mujmail.com и выведите на экран с помощью оператора +.
let userName = prompt("Enter your name");
let userSurname = prompt("Enter your surname");
let email = userName + "." + userSurname + " @mujmail.com"
;
document.body.innerHTML = `<h1>Hello, ${userName}</h1>
                            <p>We created for you new email address</p>
                            <p>Your email addresss id ${email}</p>`;