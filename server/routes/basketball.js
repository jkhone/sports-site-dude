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

router.post("/players", (request, response, next) => {
    const player = request.body.player
    const team = request.body.team
    const url = request.body.url
   
    const sql=
    `
    INSERT INTO players (player, team, url) VALUES('${player}','${team}','${url}')
`
    db.query(sql, (error, results, fields) => {
        response.json(results)
    })
})

router.get("/players/:id", (request, response, next) => {
    console.log("hello")
    const id = request.params.id
    const sql = `
    SELECT id, player, team, url
    FROM players
    WHERE id = ?
    `

    db.query(sql, [id], (error, results, fields) => {
        response.json(results)
    })
})



router.get("/shoes", (request, response, next) => {
    console.log("hello")
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes
    `

    db.query(sql, (error, results, fields) => {
        console.log("success")
        response.json(results)
    })
})


router.post("/shoes", (request, response, next) => {
    const playerId = request.body.playerId
    const brand = request.body.brand
    const shoe = request.body.shoe
    const size = request.body.size
    const color = request.body.color
    const pic = request.body.pic 
    const price = request.body.price
   
    const sql=
    `
    INSERT INTO shoes (playerId, brand, shoe, size, color, pic, price) 
    VALUES('${playerId}','${brand}','${shoe}','${size}','${color}','${pic}','${price}')
`
    db.query(sql, (error, results, fields) => {
        console.log('test')
        response.json(results)
    })
})



router.get("/shoes/:id", (request, response, next) => {
    console.log("hello")
    const id = request.params.id
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes WHERE id = ?
    `

    db.query(sql, [id], (error, results, fields) => {
        response.json(results)
    })
})


module.exports = router