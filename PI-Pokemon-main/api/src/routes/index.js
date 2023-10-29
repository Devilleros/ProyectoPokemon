const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {createUser} = require("./controllers/createUser")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//

router.post("/create-user", createUser);


module.exports = router;
