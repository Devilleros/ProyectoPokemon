// const URL = "https://pokeapi.co/api/v2/pokemon";
// const axios = require("axios");
const {Pokemon,Type} = require("../../db")

const getPokemons = async (req,res) => {
    // axios(URL)
    // .then(({data}) =>{
    //     return res.status(200).json(data)
    // }).catch(err => res.status(400).json({error : err.message}))
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