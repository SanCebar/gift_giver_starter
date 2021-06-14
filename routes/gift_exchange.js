const express = require("express")
const router = express.Router()
const Gift_exchange = require("../models/gift_exchange")


router.get("/", async (req, res, next) => {
    const votes = await Gift_exchange.tallyVotes()
    res.status(200).json(votes)
})

router.post("/:pizzaName", async (req, res, next) => {
    const pizzaName = req.params.pizzaName
    const votes = await Gift_exchange.recordVote(pizzaName)

    res.status(200).json(votes)
})

module.exports = router