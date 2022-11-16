const { Router } = require("express");
const router = Router();
const { Champion } = require("../db");

router.get("/", async (req, res) => {
    let AllChampions = await Champion.findAll();
    res.status(200).send(AllChampions);
});

module.exports = router;