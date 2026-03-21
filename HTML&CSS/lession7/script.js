const open = document.querySelector(".btn_modal");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");


open.addEventListener("click", ()=>{
    modal.classList.add("active");
    overlay.classList.add("active");
});

close.addEventListener("click", ()=>{
    modal.classList.remove("active");
    overlay.classList.remove("active");
});

// hamburger menu
const menu = document.querySelector('.hamburger');
const list = document.querySelector('.list');

menu.addEventListener("click", ()=>{
    list.classList.toggle('active')
})