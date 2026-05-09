import { fetchSimsons } from "./api";
import { renderModal } from "./modal";
import "./style.css";
import { hiddenSpinner, renderCards, showSpiner } from "./ui";

const btnLoad = document.querySelector("#loadBtn");
const pagination = document.querySelector(".pagination");
const spanText = document.querySelector("#span");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const containerCharakters = document.querySelector("#characters");
let currentSimsons = [];
let currentPage = 1;

async function loadCharakters() {
  showSpiner();
  try {
    const data = await fetchSimsons(currentPage);
    currentSimsons = data.results;
    console.log(currentSimsons);
    renderCards(currentSimsons);

    pagination.style.display = "flex";
    spanText.textContent = currentPage;

    if (currentPage > 1) {
      prevBtn.removeAttribute("disabled");
    } else {
      prevBtn.setAttribute("disabled", "");
    }

    if (currentPage === data.pages) {
      nextBtn.setAttribute("disabled", "");
    } else {
      nextBtn.removeAttribute("disabled");
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

containerCharakters.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".card");
  if (!clickedCard) return;

  const currentId = clickedCard.dataset.id;
  const currentElement = currentSimsons.find((el) => el.id == currentId);
  document.body.insertAdjacentHTML("beforeend", renderModal(currentElement));

  logicCloseModal();
});

function logicCloseModal() {
  const closeBtn = document.querySelector(".close-btn");
  const modal = document.querySelector("#modal");

  const removeModal = () => modal.remove();

  closeBtn.addEventListener("click", removeModal);

  window.addEventListener("keydown", function escClick(e) {
    if (e.key === "Escape") {
      removeModal();
      window.removeEventListener("keydown", escClick);
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      removeModal();
    }
  });
}

// window.addEventListener("keydown", (e)=>{
//   console.log(e.key)
// })

// const testSimson = {
//   name: "Hamer",
//   age: 27,
//   gender: "male"
// };

// document.body.insertAdjacentHTML("afterbegin", renderModal(testSimson));

// Разделяем на отдельные модули:
//  - index.html — разметка.
//  - src/api.js — только сетевые запросы.
//  - src/ui.js — всё, что связано с визуалом (спиннер, отрисовка карточек).
//  - src/modal.js — логика работы модального окна.
//  - src/main.js — главный «дирижер», который хранит состояния (allCharacters, currentPage), следит за скроллом и связывает все модули вместе.
