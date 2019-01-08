const data = POKEMON.pokemon;
const container = document.getElementById("root");

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