import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { navigateTo, router } from './router';
import { ErrorPage } from './pages/ErrorPage';

const root = document.querySelector("#app");

function initalLayout(){
  root.innerHTML = `
  ${Header()}
  <main class="main"></main>
  ${Footer()}
  `;
}

initalLayout();

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", (event)=>{
  document.body.addEventListener("click", (event)=>{
    if(event.target.matches("[data-link]")){
       event.preventDefault();
       navigateTo(event.target.href);
    }
  })

  router();
});