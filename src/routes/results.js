const e = require("express");
const { Router } = require("express");
const { where } = require("sequelize");
const router = Router();
const { Simpleresult, Game } = require("../db");

router.post('/', async (req, res) => {
    for (const bet of req.body) {
        let resultado = await Simpleresult.create({
            winner: bet.winner,
        })
        let id = bet.id; 
        let game = await Game.findOne({
            where: {id:id}    
        })
        await game.addSimpleresults(resultado)
    }
    res.status(200).send("apuestas realizadas con exito");
})
router.get("/", async (req, res) => {
    let resultados = []
    let Allgames = await Game.findAll()
    Allgames.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0))
    Allgames.forEach(e => resultados.push({
        [e.team1]: 0,
        [e.team2]: 0
    }))
    resultados.reverse();
    for (const iterator of Allgames) {
        let currentGameResults = await Simpleresult.findAll({
            where:{gameId: iterator.id}
        })
        currentGameResults.forEach(element => {
            if(resultados[element.gameId - 5].hasOwnProperty(element.winner)){
                resultados[element.gameId - 5][element.winner]++;
            }
        });
    }
    res.status(200).send(resultados);
});

module.exports = router;
