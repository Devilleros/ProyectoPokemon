const {Pokemon} = require("../../db");
const {Type} = require("../../db");

const createPokemon = async (req,res) => {
    try {
        const {
            name,
            idApi,
            image,
            sprite,
            hp,
            attack,
            defense,
            specialAttack,
            specialDefense,
            speed,
            height,
            weight,
            type1,
            type2
        } = req.body;
        const newPokemon = await Pokemon.findOrCreate({where: {
            name,
            idApi,
            image,
            sprite,
            hp,
            attack,
            defense,
            specialAttack,
            specialDefense,
            speed,
            height,
            weight
        }});
        if(newPokemon){
            const findType1 = await Type.findOne({where:{name:type1}});
            const type1Id = findType1.dataValues.id;
            await newPokemon[0].addTypes(type1Id);
            if(type2){
                const findType2 = await Type.findOne({where:{name:type2}});
                const type2Id = findType2.dataValues.id;
                await newPokemon[0].addTypes(type2Id);
            }
        };
        res.status(200).json(newPokemon);
        
    } catch (error) {
        res.status(401).json({error : error.message});
    }
}

module.exports = {createPokemon};




// if(newPokemon){
//     const newPokemontype1 = await PokemonType.findOrCreate({where :{
//         pokemonId: newPokemon[0].dataValues.id ,
//         typeId: type1Id
//     }})
// }else if(type2){
//     const newPokemontype2 = await PokemonType.findOrCreate({where :{
//         pokemonId: newPokemon[0].dataValues.id,
//         typeId: type2Id
//     }})
// }