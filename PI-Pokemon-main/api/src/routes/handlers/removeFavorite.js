const {User} = require("../../db");
const {Pokemon} = require("../../db");

const removeFavorite = async (req,res)=>{
    const email = req.query.email;
    const id = req.params.id;
    try {
        const user = await User.findOne({where:{email: email}});
        const pokemon = await Pokemon.findOne({where:{idApi: id}})
        await pokemon.removeUser(user);
        const poks = await User.findOne({where:{email: email}, include: Pokemon})
        res.status(200).send(poks);
    } 
    catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {removeFavorite};