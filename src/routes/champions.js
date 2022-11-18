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

router.get("/top3", async (req, res) => {
    let paises=[
        'qatar',
        'alemania',
        'dinamarca', 
        'francia',
         'belgica', 
         'croacia',
         'españa', 
         'serbia', 
         'inglaterra', 
         'paises bajos', 
         'portugal', 
         'polonia', 
         'gales', 
         'brasil', 
         'argentina', 
         'uruguay', 
         'ecuador', 
         'canada', 
         'mexico', 
         'estados unidos', 
         'costa rica', 
         'iran', 
         'corea del sur', 
         'japon', 
         'arabia saudita', 
         'australia', 
         'ghana', 
         'senegal', 
         'tunez', 
         'marruecos', 
         'camerun'
    ]
    let repetidos= [];
    let AllChampions = await Champion.findAll();
    paises.forEach(e => repetidos.push({
        team: e,
        votes: 0,
    }));
    AllChampions.forEach(e => repetidos[paises.indexOf(e.team)].votes++);
    repetidos.sort((a,b) => (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))

    res.status(200).send([repetidos[0], repetidos[1], repetidos[2]]);

    
});

module.exports = router;


