const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    // Se define el modelo
    sequelize.define("user",{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            }
            // isEmail: true,
            // unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [6, 20]
            },
        },
    })
}