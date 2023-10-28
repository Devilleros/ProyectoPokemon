require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
//const User = require('./models/User');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {  Pokemon ,
         Region ,
         Type,
         User,
         Zone} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Tabla intermedia de Users y Pokemons
User.belongsToMany(Pokemon, {through : "UserPokemon"});
Pokemon.belongsToMany(User, {through : "UserPokemon"});
// Tabla intermedia de Pokemons y Types
Pokemon.belongsToMany(Type , {through : "PokemonType"});
Type.belongsToMany(Pokemon , {through : "PokemonType"});
// Tabla intermadia Pokemon y Zone
Pokemon.belongsToMany(Zone , {through : "PokemonZone"});
Zone.belongsToMany(Pokemon , {through : "PokemonZone"});
// Se crea la relacion de Zonas y Regiones
Region.hasMany(Zone);
Zone.belongsTo(Region);

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
