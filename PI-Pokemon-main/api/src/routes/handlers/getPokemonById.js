const axios = require("axios");

const {Pokemon} = require("../../db")
const {getData} = require("../controllers/getPokemonfunc")

//Url de
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonById = async (req,res) =>{
    const {id} = req.params;
    if (+id){
            axios(`${URL}/${id}`)
            .then(({data}) => {
                const pokemon = getData(data);
                return res.status(200).json(pokemon);
            }).catch(err => res.status(401).json({error : err.message}))
        }else{
            try {
                const pokemon = await Pokemon.findByPk(id);
                res.status(200).send(pokemon)
            } catch (error) {
                res.status(402).json({error : error.message});
            }
            

        }
};

module.exports = {getPokemonById};