const {Type} = require("../../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";

const getTypes = async (req , res) => {
    axios(URL)
    .then(async ({data})=>{
        
        const newTypes = await data.results.map((type)=>{
            return Type.create({name: type.name})
        })
        res.status(200).json(newTypes)      
    }).catch(err => res.status(400).json({error : err.message}))

};

module.exports = {getTypes};


//const newType = await Type.bulkCreate(types)

// const newTypes = await data.results.forEach(type => {
//     console.log(type.name);
//     Type.create(type.name)
// });

//const newType = await Type.bulkCreate(data)