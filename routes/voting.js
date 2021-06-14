const express = require("express")
const router = express.Router()

const voting = {
    pepperoni: 0,
    cheese: 0,
    hawaiian: 0,
}

router.get("/", async (req, res, next) => {
    res.status(200).json(voting)
})

router.post("/", async (req, res, next) => {
    res.status(200).json(voting)
})

router.post("/:pizzaName", async (req, res, next) => {
    console.log(req.params)

    const pizzaName = req.params.pizzaName
    if (voting[pizzaName] || voting[pizzaName] == 0) {
        voting[pizzaName] += 1;
    }

    res.status(200).json(voting)
})

module.exports = router