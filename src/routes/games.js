const { Router } = require("express");
const router = Router();
const { Game } = require("../db");

router.get("/", async (req, res) => {
    let AllGames = await Game.findAll();
    res.status(200).send(AllGames);
});

module.exports = router;