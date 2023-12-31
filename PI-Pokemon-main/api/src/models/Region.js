const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    // Se define el modelo
    sequelize.define("region",{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        idApi:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
}