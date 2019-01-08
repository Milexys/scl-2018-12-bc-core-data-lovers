const data = POKEMON.pokemon;
const container = document.getElementById("root");
const selectType = document.getElementById("select");

const showPokemon = (data) =>{
    let card= '';
    data.forEach(element => { 
        card = container.innerHTML += 
        `<div class="row">
            <div class="col s12 m6 ">
                <div class = "card">
                    <h4 class="name">${element.name}</h4>
                    <p class="number">ID: ${element.num}</p>
                    <img class="image" src="${element.img}"/>
                    <div class="Type">${element.type.join('-')}</div>
                </div>
            </div>
        </div>`;
        });
    return card;
}

selectType.addEventListener("change", () => {
    let condition = document.getElementById("select").value;
    let filterResult = filterPokemon(data, condition);
    container.innerHTML = "";
    filterResult.forEach(element => {
        container.innerHTML +=
        `<div class="row">
        <div class="col s12 m6 ">
            <div class = "card">
                <h4 class="name">${element.name}</h4>
                <p class="number">ID: ${element.num}</p>
                <img class="image" src="${element.img}"/>
                <div class="Type">${element.type.join('-')}</div>
            </div>
        </div>
    </div>`;
    })
});
window.onload = showPokemon(data);