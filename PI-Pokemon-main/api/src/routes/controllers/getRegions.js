const {Region} = require("../../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/region";

const getRegions = async (req , res) => {
    axios(URL)
    .then(async ({data})=>{
        
        const newRegions = await data.results.map((region)=>{
            let arrUrl = region.url.split("/");
            let idApi = +arrUrl[arrUrl.length -2];
            console.log(region);
            return Region.create({name: region.name , idApi: idApi})
        })
        res.status(200).json(newRegions)      
    }).catch(err => res.status(400).json({error : err.message}))

};

module.exports = {getRegions};