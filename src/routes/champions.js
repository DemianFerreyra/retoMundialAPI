const { Router } = require("express");
const router = Router();
const { Champion } = require("../db");

router.get("/", async (req, res) => {
    let AllChampions = await Champion.findAll();
    res.status(200).send(AllChampions);
});
router.post("/", async (req, res) => {
    const { team } = req.body;

    try {
        await Champion.create({
            team: team.toLowerCase()
        })
        res.status(200).send(`Has apostado que ${team} saldra campeon!`);
    } catch (error) {
        res.status(400).send("Algo ha salido mal :(");
    }
});

module.exports = router;