const filterPokemon = (data , condition) => {
    if (condition === "0") {
        return data;
        
    };
    const filteredPokemons  = data.filter(element => {
        if (element.type[0] === condition) return element.type[0] === condition;
        else if (element.type[1] === condition) return element.type[1] === condition;
    });
    return filteredPokemons;
};
const orderPokemon = (data) => {
    const orderedPokemon = data.sort(function(a, b){
        if (a.name > b.name){
            return 1;
        }
        else if (a.name < b.name){
            return -1;
        }
        else return 0;
    });
    return orderedPokemon;
};