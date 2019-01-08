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