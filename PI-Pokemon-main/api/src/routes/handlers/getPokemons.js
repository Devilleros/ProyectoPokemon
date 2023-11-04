const {Pokemon,Type} = require("../../db")

const getPokemons = async (req,res) => {
    try {
        const pokemon = await Pokemon.findAll(
            {include: Type
            });
        res.status(200).send(pokemon)
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports= {getPokemons};