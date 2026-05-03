import { fetchSimsons } from "./api";
import "./style.css";
import { hiddenSpinner, renderCards, showSpiner } from "./ui";

const btnLoad = document.querySelector("#loadBtn");
const pagination = document.querySelector(".pagination");
const spanText = document.querySelector("#span");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

let currentPage = 1;

async function loadCharakters() {
  showSpiner();
  try {
    const data = await fetchSimsons(currentPage);
    console.log(data.results);
    renderCards(data.results);

    pagination.style.display = "flex";
    spanText.textContent = currentPage;
    
    if (currentPage > 1) {
      prevBtn.removeAttribute("disabled")
    } else {
      prevBtn.setAttribute("disabled", "")
    }

    if (currentPage === data.pages) {
      nextBtn.setAttribute("disabled", "")
    } else {
      nextBtn.removeAttribute("disabled")
    }

  } catch (error) {
    console.error(error);
  } finally {
    hiddenSpinner();
  }
}

nextBtn.addEventListener("click", () => {
  currentPage++;
  loadCharakters();
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  loadCharakters();
});

btnLoad.addEventListener("click", () => {
  currentPage = 1;
  loadCharakters();
});

// Разделяем на отдельные модули:
//  - index.html — разметка.
//  - src/api.js — только сетевые запросы.
//  - src/ui.js — всё, что связано с визуалом (спиннер, отрисовка карточек).
//  - src/modal.js — логика работы модального окна.
//  - src/main.js — главный «дирижер», который хранит состояния (allCharacters, currentPage), следит за скроллом и связывает все модули вместе.
