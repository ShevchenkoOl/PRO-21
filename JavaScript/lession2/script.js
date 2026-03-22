// let a = 5;
// let b = "5"; // переводит стрингу 5 в число 5
// console.log(typeof(b));  // string

// let bToNumber = Number(b);
// console.log(bToNumber, typeof(bToNumber)); // number

// let negativeToNumber = Number("-3.45");
// console.log(bToNumber, typeof(bToNumber)); // -3.14 number

// let textToNumber = Number("Alex");
// console.log(textToNumber, typeof(textToNumber)); // NaN number

// console.log(Number("45px")); // NaN

// let total = a * b;
// console.log(total);

// console.log(parseInt("3.99")); // 3
// console.log(parseInt("45px")); // 45
// console.log(parseInt("0.99")); // 0
// console.log(parseInt("px45"));  // NaN

// console.log(parseFloat("12"));    // 12
// console.log(parseFloat("12.0"));  // 12 
// console.log(parseFloat("12.045"));  // 12.045
// console.log(parseFloat("-12.045px")); // -12.045

// console.log(typeof(+"54")); //number
// console.log(+"54px", typeof(+"54px")); // NaN number
// console.log(+"px", typeof(+"px")); // NaN number

// const age = +prompt("Enter your age");
// // const age = Number(prompt("Enter your age"));
// console.log(age, typeof(age));

// const ageToNumber = +age;
// console.log(ageToNumber, typeof(ageToNumber));

// console.log(Math.round("45.45")); // 45
// console.log(Math.round(45)); // 45
// console.log(Math.round(45.6));  // 46
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.round(Math.PI)); // 3

// console.log(Math.ceil(3.1)); // 4
// console.log(Math.floor(3.9)); // 3

// console.log(Math.random()); // от 0 до 1
// console.log(Math.round(Math.random() * 100));  // от 1 до 100
// console.log(Math.random()*100);
// Math.floor(Math.random() * (max - min + 1)) + min // формула для конкретно заданого диапазоны чисел
// console.log(Math.floor(Math.random() * (100 - 98 + 1)) + 98); // от 98 до 100

// console.log(Math.pow(2, 3)); // 8

// console.log(Math.min(-1, 0, -85, 74, 12, 1)); // -85
// console.log(Math.max(-1, 0, -85, 74, 12, 1)); // 74
// console.log(Math.min("45", 78)); // 45
// console.log(Math.min("45", "sded", 78)); // NaN

// console.log(NaN === NaN); // false

// let a;
// console.log(a); // undefined
// console.log(typeof(undefined)); //undefined

// console.log(0.1 + 0.2);
// console.log(9999999999999999);
// console.log((0.1 + 0.2).toFixed(2)); // 0.30



// let text = "IT Step Academy";
//          0123456789....14
// console.log(typeof(text)); // string
// console.log(text[5]);
// console.log(text[9], text[5]); // c e
// console.log(text.length); // 15
// console.log(text[text.length - 1]); // y
// let char5 = text[4];
// console.log(char5); // t

// text[4] = "z";  // проигнорировалось 
// console.log(text[4]);

// console.log(text.toLowerCase()); // it step academy
// console.log(text.toUpperCase()); // IT STEP ACADEMY
// Обьявляем две переменные
// let userName = prompt("Введите ваше имя:");
// let userSurname = prompt("Введите вашу фамилию:");

// // Обьявляем новую переменную которвя будет отвечать за слияние строк
// let email = userName.toLowerCase() + "." + userSurname.toLowerCase() + "@mujmail.com";

// // Через шаблонную строку добавляем HTMl код
// document.body.innerHTML = `
//     <h1 class="title">Привет, ${userName}!</h1>
//     <p class="paragraph">На основе твоих данных, мы создали для тебя новый адрес электронной почты</p>
//     <p class="paragraph">Твой новый адрес электронной почты: ${email}</p>
// `;


// let str = "Hello world!";
// console.log(str.indexOf("w"));  // 6
// console.log(str.indexOf("world")); // 6
// console.log(str.indexOf("hi")); // -1

// console.log(str.includes("Hi")); // false
// console.log(str.includes("hello")); // false
// console.log(str.includes("Hello")); // true

// let name = "     Al    ex        ";
// console.log(name);
// console.log(name.trim()); // обрезает пробелы в начале и в конце строки

// let str2 = "Czech Republic";
// console.log(str2.slice(3, 8)); // ch Re
// console.log(str2.slice(8)); // public
// console.log(str2.slice(str2.length-5)); // ublic

// console.log(str2.replace("Czech", "Domenic")); // Domenic Republic
// console.log(str2.replace("czech", "Domenic")); // Czech Republic
// console.log(str2.replace("Czech")); // undefined Republic


let a = "Hello";
console.log(a.repeat(5)); // HelloHelloHelloHelloHello
console.log((a + " ").repeat(5)); // Hello Hello Hello Hello Hello 