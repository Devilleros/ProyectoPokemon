const {Pokemon} = require("../../db")
const { Sequelize, Op } = require('sequelize');

const getFiltered = async (req, res) => {
    const filter = req.params.filter
    try {
        const pokemonfiltered = await Pokemon.findAll({where:{name: {
            [Sequelize.Op.like]: `%${filter}%`,
          },}})
        res.status(200).send(pokemonfiltered)
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {getFiltered}