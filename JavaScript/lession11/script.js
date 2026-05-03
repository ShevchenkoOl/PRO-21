// function loadData(){
//     console.log("1. Loading page");

//     setTimeout(()=> {
//         console.log("2. Загрузка завершина. Реддарим страничку.....")


//         setTimeout(()=>{
//              console.log("3. Открывает модалку")
//         }, 0)

//         // 

//     }, 0)
// }

// console.log("4. Finish")

// loadData();



// function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// };

// async function loadData(){
//     console.log("1. Loading page");

//     await sleep(2000);
//     console.log("2. Загрузка завершина. Реддарим страничку.....");

//     await sleep(1000);
//     console.log("3. Открывает модалку")
// }

// console.log("4. Finish")

// loadData();


// http://api.weatherapi.com/v1/current.json?key=b6be50b4d7ef4ad7b2875758261601&q=Prague

const URL ="http://api.weatherapi.com/v1/current.json";
const API_KEY = "b6be50b4d7ef4ad7b2875758261601";
// const location = "Prague";

// function loadWether(){
//     // return fetch(`${URL}?key=${API_KEY}&q=Prague`)
//     return fetch("http://api.weatherapi.com/v1/current.json?key=b6be50b4d7ef4ad7b2875758261601&q=Prague")
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.status)
//         }
//     // console.log(response);
//     return response.json();
// })
//     .then(data => {
//             console.log(data); // ← ВОТ ТУТ уже body
//             return data;
//         });
// };

// loadWether();


// async/await



const form = document.querySelector("#form");
const input = document.querySelector("#input");

let city = "";

input.addEventListener("change", () => {
city = input.value;
console.log("city", city);
})


async function loadWether(){
    
    try {
       console.log("Spinner is starting......");
    
       const res = await fetch(`${URL}?key=${API_KEY}&q=${city}`);

       if(!res.ok){
        throw new Error(res.status)
       }

       const data = await res.json();
       console.log(data);
       const result = data.current;
       console.log(data.current);

        // отрисовка
        document.body.innerHTML = `
                <h1>Погода в ${city}</h1>
                <p><img src="${result.condition.icon}" onerror="this.src='sun.jpg'" alt="icon wether" >
                    <span>${result.condition.text}</span>
                    <span>${result.temp_c}</span>
                </p>
                <p>Обновлено: ${result.last_updated}</p>
        `;

    } catch (error) {
        console.error("Что-то пошло не так:", error.message);
    }

    finally{
        console.log("Spinner stopped!");
    }
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadWether();
});

// current.temp_c
// current.condition.text
// current.condition.icon
// current.last_updated

//  <img src="https://thesimpsonsapi.com/api${character.portrait_path}" onerror="this.src='sim.jpg'" alt="${character.name}"></img>
