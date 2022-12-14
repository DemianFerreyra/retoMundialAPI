const { Router } = require("express");
const router = Router();
//import rutas
const championsRouter = require("./champions.js");
const resultsRouter = require("./results.js")
const gamesRouter = require("./games.js")

router.use("/champions", championsRouter);
router.use("/results", resultsRouter);
router.use("/games", gamesRouter);

module.exports = router;