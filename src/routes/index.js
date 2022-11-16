const { Router } = require("express");
const router = Router();
//import rutas
const championsRouter = require("./champions.js");

router.use("/champions", championsRouter);

module.exports = router;