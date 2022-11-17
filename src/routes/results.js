const { Router } = require("express");
const router = Router();
const { Result } = require("../db");

router.post('/', async (req, res) => {
   await Result.create({
        userUbication: req.body.ubication,
        team1Result: req.body.team1Result,
        team2Result: req.body.team2Result

    })

    res.status(200);
})
module.exports = router;