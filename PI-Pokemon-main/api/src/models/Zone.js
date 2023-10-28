const {DataTypes} = require("sequelize");
const Region = require("./Region");

module.exports = (sequelize) =>{
    // Se define el modelo
    sequelize.define("zone",{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        aproxLevel:{
            type: DataTypes.INTEGER,
            validate: {
                min: 1, // Valor mínimo
                max: 100, // Valor máximo
              },
        }
    })
}