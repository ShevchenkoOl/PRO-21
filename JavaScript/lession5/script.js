// let arr = [1, "string", true, null];
//         0      1       2     3
// console.log(arr[1]); // string
// arr[0] = 45;
// console.log(arr);

// console.log(typeof(arr));

const arr = [1, 2, 3];
console.log(arr);
console.log(typeof(arr)); // object

console.log(typeof(1) === "number"); // true
console.log("Это массив", Array.isArray(arr)) // true

// const arr1 = ["apple", "pure", "orange"];
// arr1[0] = 45;
// arr1[1] = 7;
// // arr1[2] = 0;
// console.log(arr1); // arr1[45, 7, 0]

// arr1 = [45, 7, 0];
// console.log(arr1);  // TypeError

// let arr2 = ["apple", "pure", "orange"];
// arr2 = [45, 78, null];
// // console.log(arr2);    // [ 45, 78, null ]

// // document.body.innerHTML = `<div>${arr2[1]}</div>`

// console.log(arr2.length); // 3
// console.log(arr2[arr2.length-1]);  // null

// let str1 = "JavaScript hgghghj-jhjjjhhj";
// console.log(str1.split()); // [ 'JavaScript hgghghj jhjjjhhj ' ]
// console.log(str1.split(''));
// [
//   'J', 'a', 'v', 'a', 'S', 'c',
//   'r', 'i', 'p', 't', ' ', 'h',
//   'g', 'g', 'h', 'g', 'h', 'j',
//   ' ', 'j', 'h', 'j', 'j', 'j',
//   'h', 'h', 'j', ' '
// ]

// console.log(str1.split('j'));

// let arr5 = ["I", "love", "JavaScript"];
// console.log(arr5.join(" ")); // I love JavaScript

// const str5 = "Hello";
// // str5[0] = "A";
// // console.log(str5[0]);

// // Helo JS
// // const newStr = str5 + " JS";
// // console.log(newStr);

// let strToSArr = str5.split('');
// // strToSArr[0] = "A";
// // console.log(strToSArr.join(""));
// strToSArr.push(" ", "JS");
// console.log(strToSArr.join(""));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly"));    // 2
// console.log(clients.indexOf("Monkong")); // -1

// console.log(clients.includes("Poly"));    // true
// console.log(clients.includes("Monkong")); // false
// console.log(clients.includes("Monkong") || clients.includes("Kiwi")); // true
// console.log(clients.includes("Monkong") && clients.includes("Kiwi")); // false

// let arr6 = [45, 78, "True"];
// // arr6.push("JS");
// // console.log(arr6);     // [45, 78, "True", "JS"]

// // arr6.unshift(false);
// // console.log(arr6);     // [false, 45, 78, "True", "JS"]

// console.log(arr6.pop()); // True
// console.log(arr6);       // [ 45, 78 ]

// console.log(arr6.shift()); // 45
// console.log(arr6);   // [ 78 ]

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(1, 4);
// console.log(newArr); // [2, 3, 4]
// console.log(arr);     //  [1, 2, 3, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); // Удаляем 2 элемента начиная с индекса 1
// console.log(arr); // [ 1, 4, 5 ]

// const oldC = ["Mango", "Ajax"];
// const newC = ["Monkong", "Singu"];
// const newArr = oldC.concat(newC);
// console.log(newArr);
// console.log(oldC);

// let fruits = ["orange", "bannan", "apple", "pure", "peer"];

// for (let i = 0; i < fruits.length-1; i++){
//     console.log(fruits[i]);
// }

// let index = fruits.indexOf("bannan");
// if (index === -1) {
//   console.log(fruits);
// } else {
//   //  let doBannan = fruits.slice(0, index);
//   //  console.log(doBannan); // [ 'orange' ]
//   //  let posleBannan = fruits.slice(index +1, fruits.length);
//   //  console.log(posleBannan); // [ 'apple', 'pure', 'peer' ]
//   //  console.log(doBannan.concat(posleBannan));
//   fruits.splice(index, 1);
//   console.log(fruits);
// }

// for(const element of fruits){
//     console.log(element);
// };

// for(const index in fruits){
//     console.log(index);
// };

// let staff = [
//   "Alex",
//   "Farid",
//   "Vlad",
//   "Adil",
//   "Liana",
//   "Elena",
//   "Dima",
//   "Ichtear",
// ];
// let emails = [];
// // for (const element of staff) {
// //   let email = element.toLowerCase() + "@itstep.com";
// //   emails.push(email);
// // }
// // console.log(emails);

// for (const element of staff) {
//   console.log(element.toLowerCase() + "@itstep.com");
//   emails.push(element.toLowerCase() + "@itstep.com");
// }
// console.log(emails);

const obj = {
  name: "name",
  age: 15,
  isOnline: true,
};


const obj2 = {
  users: ["name", "user2"],
  age: 15,
  isOnline: true,
  stats: {
        followers: 5603,
        views: 4827
    }
};


// console.log(obj2.users[0]); // "name"
// console.log(obj2.stats.views); // 4827

const obj3 = {
  "usersStru": ["name", "user2"],
  age: 15,
  "isOnline": true,
  "stats": {
       "$followers": 5603,
        "_views": 4827
    }
};

// console.log(obj3["usersStru"]);  // [ 'name', 'user2' ]
// console.log(obj3["age"]);       // 15
// console.log(obj3.city); // undefined

// obj3.usersStru = "Alex";
// console.log(obj3);

// obj3 = {key: 15};
// console.log(obj3); // TypeError

// console.log(typeof(obj3)); // object

// delete obj3.isOnline;
// console.log(obj3);

// delete obj3.city;

// for(const ement in obj3){
//     console.log(ement);      // выводит все ключи
//     console.log(obj3[ement]); // выводит все значения
// }




const user = { name: "Alex", age: 26, email: "alex@test.com" };


let { name, age, city = "Prague" } = user;

// console.log(name); // Alex
// console.log(city); // Prague

// city = "Brno";
// console.log(city);  // Brno

const profile = { 
    tag: "jgluke", 
    stats: { followers: 5000, likes: 1300 } 
};

// const {tag, stats: {followers, likes = 0}} = profile;
// console.log(likes);

// console.log(Object.keys(profile));  // [ 'tag', 'stats' ]
// console.log(Object.values(profile)); // [ 'jgluke', { followers: 5000, likes: 1300 } ]
// console.log(Object.entries(profile)); // [ [ 'tag', 'jgluke' ], [ 'stats', { followers: 5000, likes: 1300 } ] ]