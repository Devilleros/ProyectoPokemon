const {User} = require("../../db");
const {Pokemon} = require("../../db");

const getFavorites = async (req, res) => {
    try {
        const poks = await User.findOne({where:{email: req.query.email}, include: Pokemon})
        res.status(200).send(poks);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {getFavorites}