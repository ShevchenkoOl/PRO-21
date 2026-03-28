// let a = 0;
// let b = 1;
// let c = 447885.5;

// console.log(a, Boolean(a)); // false
// console.log(b, Boolean(b)); // true
// console.log(c, Boolean(c)); // true

// let str1 = '';
// let str2 = ' '
// console.log(Boolean(str1)); // false
// console.log(Boolean(str2)); // true

// let a = 1;
// // a -= 1;
// a--; // 1
// let c = a;

// let b = 1;
// --b; // 0
// console.log(a, Boolean(a), Boolean(b));

// console.log(5 > 3); // true
// console.log(5 > 5); // false
// console.log(5 > 7); // false
// console.log(5 >= 5); // true
// console.log(5 >= 8); // false

// console.log(22 < "22"); // false
// console.log("22" < "23"); // true
// console.log("Hello" > "Heex"); // true через юникоды, начинает сравнивать с первой позиции
// console.log("hello".charCodeAt(4)); // 104

// == - нестрогое сравнение
// != - нестрогое неравентсво
// console.log("5" == 5); // true
// console.log(true == 0); // false
// console.log('' == false); // true
// console.log('5' != 7); // true

// === - строгое сравнениеъ
// !== - строгое неравенство
// console.log("5" === 5); // false
// console.log(5 === 5); // true
// console.log(5 !== 7); // true
// console.log(true !== true); // false

// Условие
// if(5 !== '5'){
//     console.log("Это разные типы данных");
// }

// if(5 !== 5){ // false
//  console.log("Это разные типы данных");
// } else {
// console.log("Отработал else");
// }

// let age = +prompt("Enter your age");
// if(age >= 18){
//     console.log("Welcome!");
// } else {
//     console.log("Try later!");
// }

// let a = "Mathematic";
// let b = "Fizic";
// let c = "Music";
// let d = "Filophofie";

// let user = Number(prompt("Enter the number"));

// if (user >= 1) {
//   if (user === 1) {
//     console.log(a);
//   } else if (user === 2) {
//     console.log(b);
//   } else if (user === 3) {
//     console.log(c);
//   } else if (user === 4) {
//     console.log(d);
//   } else {
//     console.log(
//       `Вы ввели: ${user}. А правильно должно быть число в интервале от 1 до 4 включительно`,
//     );
//   }
// } else {
//     console.log('Число должно быть больше или равно 1');
// };

// let userName = prompt("Enter the user name");

// if(userName.toLowerCase().trim() === "admin1234"){
//     let userPassword = prompt("Enter the password");
//     if (userPassword === "1234567"){
//         console.log("Welcome");
//     } else {
//         console.log("Imcorrect password");
//     }
// } else {
//     console.log("Wrong userName");
// }

// let userName = prompt("Enter the user name");
// let userPassword = prompt("Enter the password");

// if (
//   userName.toLowerCase().trim() === "admin1234" &&
//   userPassword === "1234567"
// ) {
//   console.log("Welcome");
// } else {
//   console.log("Something Wrong!");
// };


// console.log(!true); //false


// 5. Определение сезона Пользователь вводит номер месяwа от 1 до 12 и программа выводит ему название сезона в соответсвии к какому сезону относиться этот месяц

// let user = 5;
// if (user === 1 || user === 2 || user === 12){
//     console.log("Winter");
// } else if(user === 3 || user === 4 || user === 5){
//     console.log("Spring");
// } else if(user === 6 || user === 7 || user === 8){
//     console.log("Summer");
// } else if(user === 9 || user === 10 || user === 11){
//     console.log("Autumn");
// } else {
// document.body.innerHTML = "Incorrect";
// };

// let str = ""; // true

// // if(str.length != 0){ // true
// //     console.log("The string is not empty");
// // }

// if(!str){ //true 
//     console.log("Please, fil out the input");
// } else{
//     console.log("Thank you!");
// }



// let age = 18;
// let hasTicket = true;

// if(age >= 18 && hasTicket){
//     console.log("Welcome");
// } else {
//     console.log("sorry");
// }

// if(age >= 18 && hasTicket) console.log("Welcome");

// let result = age >= 18 && hasTicket ? console.log("Welcome") : console.log("sorry");
// document.body.innerHTML = `<h1>${result}</h1>`;

// console.log(age >= 18 && hasTicket ? "Welcome" : "sorry");

// document.body.innerHTML = `<h1>${age >= 18 && hasTicket ? "Welcome" : "sorry"}</h1>`;

// let userName = prompt("Enter the user name");
// if(userName.toLowerCase().trim() === "admin1234"){
//     prompt("Enter the password") === "1234567" ? console.log("Welcome") : console.log("Imcorrect password");
// } else {
//     console.log("Wrong userName");
// };

let number = 4;
console.log(number % 2 == 0 ? "чётное" : "нечётное");