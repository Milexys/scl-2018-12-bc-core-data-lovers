window.pokemones ={
filterPokemon: (data , condition) => {
    if (condition === "0") {
        return data;
        
    }
    const filteredPokemons  = data.filter(element => {
        if (element.type[0] === condition) return element.type[0] === condition;
        else if (element.type[1] === condition) return element.type[1] === condition;
    });
    return filteredPokemons;
},
orderPokemon: (data, sortBy, sortOrder) => {
    const dataPokemon = data
    if (sortBy === "name" && sortOrder === "az"){
        dataPokemon.sort((prev, next)=> {
            if (prev.name > next.name) {
            return 1;
            }
            if (prev.name < next.name) {
                return -1;
            }
            return 0;
        });
    }
    if (sortBy === "name" && sortOrder === "za"){
        dataPokemon.sort((prev, next)=> {
            if (prev.name < next.name) {
                return 1;
            }
            if (prev.name > next.name) {
                return -1;
            }
            return 0;
        })
    }
    if (sortBy === "num" && sortOrder === "small-big"){
        dataPokemon.sort((prev, next)=> {
            if (prev.id > next.id) {
            return 1;
            }
            if (prev.id < next.id) {
                return -1;
            }
            return 0;
        })
    }
    if (sortBy === "num" && sortOrder === "big-small"){
        dataPokemon.sort((prev, next)=> {
            if (prev.id < next.id) {
                return 1;
            }
            if (prev.id > next.id) {
            return -1;
            }
            return 0;
        })
    }
  return dataPokemon;
 }
}
