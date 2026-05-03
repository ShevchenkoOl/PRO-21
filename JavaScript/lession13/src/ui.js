const spinner = document.querySelector("#spinner");
const container = document.querySelector("#characters");
const list = document.createElement("ul");
container.append(list);

export function showSpiner() {
  spinner.style.display = "flex";
}

export function hiddenSpinner() {
  spinner.style.display = "none";
}


export function renderCards(results){
    list.innerHTML = '';
    const simsoms = results.map(simson => {
       return `
            <li class="card">
                <h2>${simson.name}</h2>
                <p><strong>Возраст: </strong><span>${simson.age}</span>
                <p><strong>Пол: </strong><span>${simson.gender}</span>
            </li>
        `
    }).join("");

    list.insertAdjacentHTML("afterbegin", simsoms)
}