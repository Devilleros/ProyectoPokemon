const {Pokemon} = require("../../db")

const deletePokemon = async (req,res) =>{
    const {id} = req.params;
    console.log(req.params);
    try {
        await Pokemon.destroy({where:{idApi: id}});
        const pokemon = await Pokemon.findAll();
        res.status(200).send(pokemon)
    } catch (error) {
        res.status(400).json({error : error.message});
    }
            

        
};

module.exports = {deletePokemon};