const { Router } = require("express");
const router = Router();
const { Result, Game } = require("../db");

router.post('/', async (req, res) => {
   let resultado = await Result.create({
        userUbication: req.body.userUbication,
        team1Result: req.body.team1Result,
        team2Result: req.body.team2Result

    })
    let id = req.body.id 

    let game = await Game.findOne({
        where: {id:id}
        
    })

    await game.addResults(resultado)
    res.status(200);
})
module.exports = router;