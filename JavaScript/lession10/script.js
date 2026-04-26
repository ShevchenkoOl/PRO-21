const btn = document.querySelector('#toggleTheme');
const btnClear = document.getElementById('clear');
const btnLang = document.querySelector("#toggleLang");
const btnAll = document.querySelector("#clearAll");

btn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  const thema = document.body.classList.contains('dark') ? "dark" : "light"
  localStorage.setItem("theme", thema);
});


btnLang.addEventListener("click", ()=>{
let lang = ""
  if(btnLang.textContent !== "Cesky"){
    lang = "Cesky";
  } else{
lang = "Eng"
  }
  btnLang.textContent = lang
  localStorage.setItem("lang", lang);
})

const savedThema = localStorage.getItem("theme");
// console.log(savedThema);
if (savedThema === "dark"){
  document.body.classList.add("dark");
}


btnClear.addEventListener('click', () => {
localStorage.removeItem("theme");
 document.body.classList.toggle('dark');
})


btnAll.addEventListener("click", ()=>{
  localStorage.clear();
})