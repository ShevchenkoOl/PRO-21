export function renderApartmanet(apratments) {
  let index = 1;
  let html = "";

  for (const el of apratments) {

    const { name, picture, location, price, accessories, area } = el;

    html += `
      <section>
        <h2>${name}</h2>
        <img src="${picture}" alt="byt# ${index}" width="200" height="200">
        <div>${area}</div>
        <div>${location}</div>
        <div>${price}</div>
        <ul>${renderAccessories(accessories)}</ul>
      </section>
    `;

    index++;
  }

  return document.body.innerHTML = html;
}

function renderAccessories(accessories) {
  let html = "";

  for (const item of accessories) {
    html += `<li>${item}</li>`;
  }

  return html;
}