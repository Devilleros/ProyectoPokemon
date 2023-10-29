// Se trae el modelo correspondiente
const {Region} = require("../../db");
const axios = require("axios");
// la funcion para procesar la respuesta
const {getData} = require("../controllers/getRegionsfunc")
// Se guarda la url correspondiente
const URL = "https://pokeapi.co/api/v2/region";

const getRegions = async (req , res) => {
    //Se hace una peticion a la Api para traer los datos
    axios(URL)
    .then(async ({data})=>{
        //Se procesan los datos
        const dataFn = getData(data);
        //busca si los datos existen y sino los crea en la base de datos
        let newRegions = dataFn.map( region => Region.findOrCreate({ where: {name: region.name , idApi: region.idApi}}));
        // respusta del servidor si todo ha salido bien
        res.status(200).json(newRegions) 
        // respuesta del servidor si no ha salido bien     
    }).catch(err => res.status(400).json({error : err.message}))

};

module.exports = {getRegions};