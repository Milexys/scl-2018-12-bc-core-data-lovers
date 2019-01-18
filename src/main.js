const data = window.POKEMON.pokemon;
const container = document.getElementById("root");
const selectType = document.getElementById("select");
const counterPokemon = document.getElementById("counterResult");

document.addEventListener('DOMContentLoaded', function() {  
    window.M.AutoInit();
  });



const showPokemon = (data) => {
    let card= '';
    data.forEach(element => { 
            card = container.innerHTML += 
            `   <div class="col m3 s12">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                             <div class="front">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <h5 class="flow-text">${element.name}</h5>
                                    <p class="left-align">ID: ${element.num}</p>
                                    <img class="responsive-img" src="${element.img}"/>
                                    <h6 class="type"><b>Type:</b> ${element.type.join(", ")}</h6>
                                    <p class="HeightAndWeight"> <b>H: </b>${element.height}   <b>W: </b>${element.weight}</p>
                                </div>
                                </div>
                                </div>	
                            </div>
                            <div class="back">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <div class="list">
                                        <ul class="collection with-header">
                                            <li class="collection-header"><h5>${element.name}</h5></li>
                                            <li class="collection-item left-align"><b>Weaknessess:</b> ${element.weaknesses.join(", ")}</li>
                                            <li class="collection-item left-align"><b>Candy:</b> ${element.candy}</li>
                                            <li class="collection-item left-align"><b>Spawn Chance:</b> ${element.spawn_chance}</li>
                                            <li class="collection-item left-align"><b>Spawn Time:</b> ${element.spawn_time}</li>
                                        </ul>
                                    </div>
                                </div>
                                </div> 
                                </div>   
                            </div>   
                        </div>
                    </div>
                </div>`;
    } );
    return card;
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
selectType.addEventListener("change", () => {
    let condition = selectType.value;
    let filterResult = window.pokemones.filterPokemon(data, condition);
    container.innerHTML = "";
    filterResult.forEach(element => {
        container.innerHTML += 
        `   <div class="col m3 s12">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                             <div class="front">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <h5 class="flow-text">${element.name}</h5>
                                    <p class="left-align">ID: ${element.num}</p>
                                    <img class="responsive-img" src="${element.img}"/>
                                    <h6 class="type"><b>Type:</b> ${element.type.join(", ")}</h6>
                                    <p class="HeightAndWeight"> <b>H: </b>${element.height}   <b>W: </b>${element.weight}</p>
                                </div>
                                </div>
                                </div>	
                            </div>
                            <div class="back">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <div class="list">
                                        <ul class="collection with-header">
                                            <li class="collection-header"><h5>${element.name}</h5></li>
                                            <li class="collection-item left-align"><b>Weaknessess:</b> ${element.weaknesses.join(", ")}</li>
                                            <li class="collection-item left-align"><b>Candy:</b> ${element.candy}</li>
                                            <li class="collection-item left-align"><b>Spawn Chance:</b> ${element.spawn_chance}</li>
                                            <li class="collection-item left-align"><b>Spawn Time:</b> ${element.spawn_time}</li>
                                        </ul>
                                    </div>
                                </div>
                                </div> 
                                </div>   
                            </div>   
                        </div>
                    </div>
                </div>`;
    });
});

document.getElementById("selectOrder").addEventListener("change", () =>{
    let sortOrder = document.getElementById("selectOrder").value;
    counterPokemon.innerHTML="";
    if (sortOrder === "az" || sortOrder ==="za") {
        let sortBy ="name";
        let orderResult = window.pokemones.orderPokemon(data, sortBy, sortOrder);
        container.innerHTML = "";
        orderResult.forEach(element=>{
                container.innerHTML += 
                `   <div class="col m3 s12">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                             <div class="front">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <h5 class="flow-text">${element.name}</h5>
                                    <p class="left-align">ID: ${element.num}</p>
                                    <img class="responsive-img" src="${element.img}"/>
                                    <h6 class="type"><b>Type:</b> ${element.type.join(", ")}</h6>
                                    <p class="HeightAndWeight"> <b>H: </b>${element.height}   <b>W: </b>${element.weight}</p>
                                </div>
                                </div>
                                </div>	
                            </div>
                            <div class="back">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <div class="list">
                                        <ul class="collection with-header">
                                            <li class="collection-header"><h5>${element.name}</h5></li>
                                            <li class="collection-item left-align"><b>Weaknessess:</b> ${element.weaknesses.join(", ")}</li>
                                            <li class="collection-item left-align"><b>Candy:</b> ${element.candy}</li>
                                            <li class="collection-item left-align"><b>Spawn Chance:</b> ${element.spawn_chance}</li>
                                            <li class="collection-item left-align"><b>Spawn Time:</b> ${element.spawn_time}</li>
                                        </ul>
                                    </div>
                                </div>
                                </div> 
                                </div>   
                            </div>   
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
                `   <div class="col m3 s12">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                             <div class="front">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <h5 class="flow-text">${element.name}</h5>
                                    <p class="left-align">ID: ${element.num}</p>
                                    <img class="responsive-img" src="${element.img}"/>
                                    <h6 class="type"><b>Type:</b> ${element.type.join(", ")}</h6>
                                    <p class="HeightAndWeight"> <b>H: </b>${element.height}   <b>W: </b>${element.weight}</p>
                                </div>
                                </div>
                                </div>	
                            </div>
                            <div class="back">
                                <div class="row">
                                <div class="col m12 s12">
                                <div class = "card">
                                    <div class="list">
                                        <ul class="collection with-header">
                                            <li class="collection-header"><h5>${element.name}</h5></li>
                                            <li class="collection-item left-align"><b>Weaknessess:</b> ${element.weaknesses.join(", ")}</li>
                                            <li class="collection-item left-align"><b>Candy:</b> ${element.candy}</li>
                                            <li class="collection-item left-align"><b>Spawn Chance:</b> ${element.spawn_chance}</li>
                                            <li class="collection-item left-align"><b>Spawn Time:</b> ${element.spawn_time}</li>
                                        </ul>
                                    </div>
                                </div>
                                </div> 
                                </div>   
                            </div>   
                        </div>
                    </div>
                </div>`;
        });
    }    
});

selectType.addEventListener("change", () => {
    counterPokemon.innerHTML = "";
    let type = selectType.value;
    if (type === "0"){
        counterPokemon.innerHTML = "";
    } else {  counterPokemon.innerHTML = `
        <div class="row">
            <div class="col m3 push-m9"><a href="#modalGraphic" class="btn green modal-trigger"><i class="material-icons left">insert_chart</i>See Graphic</a></div>
            <div class="col m9 pull-m3"><p>There are ${window.pokemones.computeStats(data, type)} pokemons, Type: '${type}'.</p></div>
        </div>`;
    }
    
  });

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  let newArrayName = [];
  let newArraySpawn =[];
    selectType.addEventListener("change", () =>{
    let condition = selectType.value;
    let filterResult = window.pokemones.filterPokemon(data, condition);
    while (newArrayName.length > 0 && newArraySpawn.length >0){
        newArrayName.pop();
        newArraySpawn.pop();
    }
    for(let i =0; i < filterResult.length; i++){
        newArrayName.push(filterResult[i].name)
    }
    for(let i =0; i < filterResult.length; i++){
        newArraySpawn.push(filterResult[i].spawn_chance)
    }
    })
    

let ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: newArrayName,
        datasets: [{
            label: "Pokemon Spawn Chance",
            backgroundColor: '#f9a825',
            borderColor: '#f9a825',
            data: newArraySpawn,
        }]
    },

    // Configuration options go here
    options: {}
});
window.onload = showPokemon(data);