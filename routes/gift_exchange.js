const express = require("express")
const { pairs, traditional } = require("../models/gift_exchange")
const router = express.Router()
const GiftExchange = require("../models/gift_exchange")


router.get("/", async (req, res, next) => {
    const pairsArray = await GiftExchange.pairs()
    res.status(200).json(pairsArray)
})

router.post("/", async (req, res, next) => {
    const unsortedPairs = req.body.names
    console.log(unsortedPairs)
    const randList = await GiftExchange.pairs(unsortedPairs)
    console.log(randList)
    const traditionalList = await GiftExchange.traditional(randList)
    console.log(traditionalList)
    res.status(200).json(traditionalList)
})

module.exports = router