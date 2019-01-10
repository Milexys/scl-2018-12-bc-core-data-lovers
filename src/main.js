const data = window.POKEMON.pokemon;
const container = document.getElementById("root");
const selectType = document.getElementById("select");

document.addEventListener('DOMContentLoaded', function() {  
    window.M.AutoInit();
  });

const showPokemon = (data) =>{
    let card= '';
    data.forEach(element => { 
        card = container.innerHTML += 
        ` <div class="row">
                <div class="col s12 m6 ">
                    <div class = "card">
                        <h4 class="name">${element.name}</h4>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="Type">${element.type.join('-')}</div>
                    </div>
                </div>
            </div>`;
        });
    return card;
}

selectType.addEventListener("change", () => {
    let condition = selectType.value;
    let filterResult = window.pokemones.filterPokemon(data, condition);
    container.innerHTML = "";
    filterResult.forEach(element => {
        container.innerHTML +=
        `<div class="row">
        <div class="col s12 m6 ">
            <div class = "card">
                <h4 class="name">${element.name}</h4>
                <p class="number">ID: ${element.num}</p>
                <img class="responsive-img" src="${element.img}"/>
                <div class="Type">${element.type.join('-')}</div>
            </div>
        </div>
    </div>`;
    })
});

document.getElementById("selectOrder").addEventListener("change", () =>{
    let sortOrder = document.getElementById("selectOrder").value;
    if (sortOrder === "az" || sortOrder ==="za") {
        let sortBy ="name";
        let orderResult = window.pokemones.orderPokemon(data, sortBy, sortOrder);
        container.innerHTML = "";
        orderResult.forEach(element=>{
            container.innerHTML +=
        `<div class="row">
        <div class="col s12 m6 ">
            <div class = "card">
                <h4 class="name">${element.name}</h4>
                <p class="number">ID: ${element.num}</p>
                <img class="responsive-img" src="${element.img}"/>
                <div class="Type">${element.type.join('-')}</div>
            </div>
        </div>
    </div>`;
        });
    }
    else if (sortOrder === "small-big" || sortOrder === "big-small"){
        let sortBy ="num";
        let orderResult = window.pokemones.orderPokemon(data, sortBy, sortOrder);
        container.innerHTML = "";
        orderResult.forEach(element=>{
            container.innerHTML +=
        `<div class="row">
        <div class="col s12 m6 ">
            <div class = "card">
                <h4 class="name">${element.name}</h4>
                <p class="number">ID: ${element.num}</p>
                <img class="responsive-img" src="${element.img}"/>
                <div class="Type">${element.type.join('-')}</div>
            </div>
        </div>
    </div>`;
        });
    }    
});

selectType.addEventListener("change", () => {
    document.getElementById("counterResult").innerHTML = "";
    let type = selectType.value;
    document.getElementById("counterResult").innerHTML = `
    <p>Existen ${window.pokemones.computeStats(data, type)} pokemones del tipo '${type}' en la región de Kanto </p>`;
  
  });
window.onload = showPokemon(data);