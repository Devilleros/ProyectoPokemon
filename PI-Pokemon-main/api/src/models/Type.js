const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    // Se define el modelo
    sequelize.define("type",{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}