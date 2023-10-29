const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {createUser} = require("./controllers/createUser");
const {getTypes} = require("./controllers/getTypes");
const {getRegions} = require("./controllers/getRegions");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//

router.get("/pokemon/types", getTypes);
router.get("/pokemon/regions", getRegions);
router.post("/create-user", createUser);


module.exports = router;
