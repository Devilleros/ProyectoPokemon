const {User , Pokemon, Type} = require("../../db");

const getFavorites = async (req, res) => {
    try {
        const userPoks = await User.findOne({where:{email: req.query.email}, include: Pokemon})
        const pokeid = userPoks.pokemons.map(pok=> pok.id)
        const pokeDataPromises = pokeid.map(async (id) => await Pokemon.findByPk(id, { include: Type }));
        const PokeData = await Promise.all(pokeDataPromises);
        res.status(200).send(PokeData);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {getFavorites}