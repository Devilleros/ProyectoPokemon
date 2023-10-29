const {Pokemon} = require("../../db")
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
            weight
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
        }})
        res.status(200).json(newPokemon)
        
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {createPokemon};