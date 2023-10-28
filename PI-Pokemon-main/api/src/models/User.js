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
            isEmail: true,
            notNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            len: [6, 20],
            notNull: false
        },
    })
}