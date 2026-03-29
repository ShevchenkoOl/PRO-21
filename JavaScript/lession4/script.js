// let a = "Mathematic";
// let b = "Fizic";
// let c = "Music";
// let d = "Filophofie";

// let user = Number(prompt("Enter the number"));

// switch (user) {
//     case (user >= 5):
//         console.log(a);
//         break;
//     case 2:
//         console.log(b);
//         break;
//     case 3:
//         console.log(c);
//         break;
//     case 4:
//         console.log(d);
//         break;
//     default:
//        console.log('Число должно быть больше или равно 1');
// }

// let button = prompt("Ведите название кнопки").toLowerCase().trim();

// switch (button) {
//     case "stop":
//         console.log("Film stopped");
//         break;
//     case "play":
//         console.log("Film is running");
//         break;
//     case "pause":
//         console.log("Film is paused");
//         break;
//     default:
//         console.log("Неверная кнопка");
// }

// // 5. Определение сезона Пользователь вводит номер месяwа от 1 до 12 и программа выводит ему название сезона в соответсвии к какому сезону относиться этот месяц

// switch (user) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Winter");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Incorrect month number");
// }

// let user = Number(prompt("Enter the number"));

// switch (true) {
//     case isNaN(user): // true   "assd"
//         console.log("Please enter a valid number");
//         break;
//     case user <= 0:
//         console.log("Please enter a positive number");
//         break;
//     default:
//         console.log("Thank you for entering a number");
// }

// for (начало; условие; шаг) {

// }

// // length  1         11
// let str = "Hello World";  // 11
// // index   0          10
// for(let i = 0; i <= str.length-1; i+=1){  // i = i + 1
// console.log(str[i]);
// }

// let num = 10; // 1 ..... 10
// let sum = 0;

// for(let i = 1; i <= num; i++){
// console.log(i);
// sum += i;
// }
// console.log("Sum:", sum);

//  Вывести нечётные числа от 1 до 20
// Используя цикл, выведите в консоль только нечетные числа из этого диапазона.

// for (let i = 1; i < 20; i += 2){
// console.log(i);
// }

// for (let i = 2; i <= 20; i += 2){
// console.log(i);
// }

// let i = 0;

// while(i <= 20){
// console.log(i);
// i+=2;
// }

// let userNumber = Number(prompt("Enter a number from -1 to 5"));
// let rabdomNumber = Math.floor(Math.random() * (5 - (-1) + 1)) + (-1); // 5

// while(userNumber !== rabdomNumber){
//     rabdomNumber = Math.floor(Math.random() * (5 - (-1) + 1)) + (-1);
//     userNumber = Number(prompt("Enter a number from -1 to 5"));
// }

// console.log("Congratulations! You guessed the number:", rabdomNumber);

// let userNumber = Number(prompt("Enter a number from 0 to 10")); // 10
// let rabdomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0; // 1

// while(userNumber !== rabdomNumber){

//     if(userNumber < rabdomNumber){
//     console.log("Your number is less than the random number");
//     } else {
//     console.log("Your number is greater than the random number");
//     }

//     userNumber = Number(prompt("Enter a number from 0 to 10"));
// }

// console.log("Congratulations! You guessed the number:", rabdomNumber);

// let userQuestion = prompt("Привет, я твой виртуальный помощник, задай мне вопрос который тебя интересует или нажми 'stop' для выхода");
// // let isStop = true;

// while(true){
//     if(userQuestion !=='stop'){
//         alert("Отличный вопрос, но я пока не знаю на него ответ!");
//         userQuestion = prompt("Задай мне вопрос ещё один вопрос который тебя интересует или нажми 'stop' для выхода");
// } else {
//     alert("До свидания!");
//     break
// };
// };

// let num = 25;

// // for (let i = 1; i <= num; i++){
// //     console.log(i)
// //     if(i === 5) break;
// // }

// for (let i = 1; i <= num; i++){
//     if(i === 5 || i === 10 || i === 17) continue;
//      console.log(i);
// }

// Просите пользователя вводить пароль, пока он не введет "admin123".

let password = prompt("Введите пароль");
// for (let i = 1; i < 3; i++){
//     if(password === "admin123"){
//         console.log("Добро пожаловать!");
//         break;
// } else {
//     console.log("Неверный пароль. Попробуйте снова.");
//     password = prompt("Введите пароль");

//     if(i === 2){
//     alert("У вас закончились попытки. Доступ запрещен.");
// }
// }}
let i = 1;

if (password !== "admin123") {
  while (password !== "admin123") {
    console.log("Неверный пароль. Попробуйте снова.");
    password = prompt("Введите пароль");
    i++;
    if (i === 3) {
      alert("У вас закончились попытки. Доступ запрещен.");
      break;
    }
  }


console.log("Добро пожаловать!");

} else {
  console.log("Добро пожаловать!");
}
