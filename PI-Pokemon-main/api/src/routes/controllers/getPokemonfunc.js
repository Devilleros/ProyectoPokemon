const getData = (apiJson) => {
    let type2;
    if(apiJson.types[1]){
        type2= apiJson.types[1].type.name
    }else type2 = false;
    return {
        idApi: apiJson.id,
        name: apiJson.species.name,
        image: apiJson.sprites.other["official-artwork"].front_default,
        sprite: apiJson.sprites.front_default,
        hp: apiJson.stats[0].base_stat,
        attack: apiJson.stats[1].base_stat,
        defense: apiJson.stats[2].base_stat,
        specialAttack: apiJson.stats[3].base_stat,
        specialDefense: apiJson.stats[4].base_stat,
        speed: apiJson.stats[5].base_stat,
        height: apiJson.height,
        weight: apiJson.weight,
        type1: apiJson.types[0].type.name,
        type2: type2,
    }
}

module.exports = {getData}