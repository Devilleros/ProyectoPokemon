const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");

const getPokemons = (req,res) => {
    axios(URL)
    .then(({data}) =>{
        return res.status(200).json(data)
    }).catch(err => res.status(400).json({error : err.message}))
}

module.exports= {getPokemons};