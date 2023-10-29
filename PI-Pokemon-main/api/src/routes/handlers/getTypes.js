//Se solicita el modelo correspondiente
const {Type} = require("../../db");
const axios = require("axios");
//Se guarda la url de la api
const URL = "https://pokeapi.co/api/v2/type";

const getTypes = async (req , res) => {
    //Se solicita los datos a la api
    axios(URL)
    .then(async ({data})=>{ 
        const newTypes = await data.results.map((type)=>{
            //Busca si los datos se encuentran sino los crea
            return Type.findOrCreate({where: {name: type.name}})
        })
        // Respuesta del servidor si todo a salido bien
        res.status(200).json(newTypes)  
        // Respuesta del servidor si no ha salido bien    
    }).catch(err => res.status(400).json({error : err.message}))

};

module.exports = {getTypes};


//const newType = await Type.bulkCreate(types)

// const newTypes = await data.results.forEach(type => {
//     console.log(type.name);
//     Type.create(type.name)
// });

//const newType = await Type.bulkCreate(data)