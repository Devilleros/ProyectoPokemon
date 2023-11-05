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
                len: [6, 20],
                isStrongPassword: function (value) {
                    // Utiliza una expresión regular para verificar la contraseña
                    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,20}$/.test(value)) {
                      throw new Error('La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial (@#$%^&+=!)');
                    }
                  }
                
            },
        },
    })
}