const data = window.POKEMON.pokemon;
const container = document.getElementById("root");
const selectType = document.getElementById("select");

const showPokemon = (data) =>{
    let card= '';
    data.forEach(element => { 
        card = container.innerHTML += 
        ` <div class="row">
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
                <img class="image" src="${element.img}"/>
                <div class="Type">${element.type.join('-')}</div>
            </div>
        </div>
    </div>`;
    })
});

document.getElementById("selectOrder").addEventListener("change", () =>{
    let sortOrder = document.getElementById("selectOrder").value;
    let orderResult = window.pokemones.orderPokemon(data);
    if (sortOrder === "az") {
        container.innerHTML = "";
        orderResult.forEach(element=>{
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
        });
    }
    else if (sortOrder === "za"){
        container.innerHTML = "";
        let orderDesc = window.pokemones.orderPokemon(data);
        let orderResult = orderDesc.reverse();
        orderResult.forEach(element=>{
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
        });
    }    
});
window.onload = showPokemon(data);