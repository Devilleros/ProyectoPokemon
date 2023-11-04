const {User , Pokemon} = require("../../db");

const addFavorite = async (req,res)=>{
    try {
        const user = await User.findOne({where:{email: req.body.email}});
        const pokemon = await Pokemon.findOne({where:{idApi: req.params.id}})
        await pokemon.addUser(user);
        const poks = await User.findOne({where:{email: req.body.email}, include: Pokemon})
        res.status(200).send(poks);
    } 
    catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {addFavorite};