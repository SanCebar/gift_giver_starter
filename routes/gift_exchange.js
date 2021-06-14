const express = require("express")
const { pairs, traditional } = require("../models/gift_exchange")
const router = express.Router()
const GiftExchange = require("../models/gift_exchange")
const {NotFoundError, BadRequestError} = require("../utils/errors")


router.get("/", async (req, res, next) => {
    try {
        const pairsArray = await GiftExchange.pairs()
        res.status(200).json(pairsArray)
    } catch(err) {
        next(err)
    } 
})

router.post("/", async (req, res, next) => {
    try {
        const unsortedPairs = req.body.names
        if (unsortedPairs == undefined) {
            throw new NotFoundError("No array with key 'names' found in request body.")
        }
        const randList = await GiftExchange.pairs(unsortedPairs)
        const traditionalList = await GiftExchange.traditional(randList)
        res.status(200).json(traditionalList)    
    } catch(err) {
        next(err)
    }
    
})

module.exports = router