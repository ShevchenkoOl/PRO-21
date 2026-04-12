export function renderApartmanet(apratments){
let index = 1;
for (const el of apratments){

    document.body.innerHTML += `
    <section style="display:block">
        <h1>${el.name}</h1>
        <img src="${el.picture}" alt="byt# ${index}" width="200" height="200">
        <div>${el.area}</div>
        <div>${el.location}</div>
        <div>${el.price}</div>
        <div>${el.accessories}</div>
    </section>
        `;
    index++;
};
};