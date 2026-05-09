export function renderModal(simson){
    return `
        <div class="modal-overlay" id="modal">
        <div class="modal-content">
        <button class="close-btn">X</button>
            <h2>${simson.name}</h2>
            <p><strong>Возраст: </strong><span>${simson.age}</span>
            <p><strong>Пол: </strong><span>${simson.gender}</span>
        </div>
        </div>
    `;
}