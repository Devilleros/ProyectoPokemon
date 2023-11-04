const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getTypes} = require("./handlers/getTypes");
const {getRegions} = require("./handlers/getRegions");
const {getPokemonById} = require("./handlers/getPokemonById");
const {getPokemons} = require("./handlers/getPokemons")
const {createUser} = require("./handlers/createUser");
const {createPokemon} = require("./handlers/createPokemon");
const {userLogin} = require("./handlers/userLogin");
const {deletePokemon} = require("./handlers/deletePokemon");
const {addFavorite} = require("./handlers/addFavorite");
const {getFavorites} = require("./handlers/getFavorites");
const {removeFavorite} = require("./handlers/removeFavorite");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//

router.get("/pokemon/types", getTypes);
router.get("/pokemon/regions", getRegions);
router.get("/pokemon/pokemons", getPokemons);
router.get("/pokemon/pokemons/:id", getPokemonById);
router.get("/pokemon");
router.get("/pokemon/favorites", getFavorites)
router.get("/user/login", userLogin);
router.post("/pokemon/create", createPokemon);
router.post("/user/create", createUser);
router.post("/pokemon/favorite/add/:id", addFavorite);
router.delete("/pokemon/favorite/remove/:id", removeFavorite);
router.delete("/pokemon/delete/:id", deletePokemon);



module.exports = router;
