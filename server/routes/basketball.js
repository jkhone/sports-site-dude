const router = require("express").Router()
const db = require("../db")

router.get("/players", (request, response, next) => {
    console.log("hello")
    const sql = `
    SELECT id, player, team, url
    FROM players
    `

    db.query(sql, (error, results, fields) => {
        response.json(results)
    })
})


router.get("/shoes", (request, response, next) => {
    console.log("hello")
    const sql = `
    SELECT id, playerid, brand, name, size, color, url, price
    FROM shoes
    `

    db.query(sql, (error, results, fields) => {
        response.json(results)
    })
})





module.exports = router