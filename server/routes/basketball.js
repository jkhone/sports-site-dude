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
    console.log("players")
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

router.get("/players/teams/:team", (request, response, next) => {
    console.log("team")
    const team = request.params.team
    const sql = `
    SELECT id, player, team, url
    FROM players
    WHERE team = ?
    `

    db.query(sql, [team], (error, results, fields) => {
        response.json(results)
    })
})

router.get("/players/search/:search", (request, response, next) => {
    console.log("search")
    const search = `%${request.params.search.toLowerCase()}%` 
    const sql = `
    SELECT id, player, team, url
    FROM players
    WHERE player LIKE ?
    `

    db.query(sql, [search], (error, results, fields) => {
        response.json(results)
    })
})

router.get("/players/teams/:team1/:team2", (request, response, next) => {
    const team1 = request.params.team1
    const team2 = request.params.team2
    const sql = `
    SELECT id, player, team, url FROM players WHERE team = ? OR team = ?
    `
    db.query(sql,[team1,team2],(error,results,fields) => {
        response.json(results)
    })
})

router.get("/players/:id", (request, response, next) => {

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

router.get("/players/:team", (request, response, next) => {
    console.log("hello")
    const team = request.params.team
    const sql = `
    SELECT id, player, team, url
    FROM players
    WHERE team = ?
    `

    db.query(sql, [team], (error, results, fields) => {
        response.json(results)
    })
})

router.get("/shoes", (request, response, next) => {
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes
    `

    db.query(sql, (error, results, fields) => {
        response.json(results)
    })
})

router.get("/shoes/search/:search", (request, response, next) => {
    
    const search = `%${request.params.search.toLowerCase()}%` 
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes
    WHERE brand LIKE ?  
    `

    db.query(sql, [search], (error, results, fields) => {
        console.log("search query")
        response.json(results)
    })
})

router.get("/shoes/size/:size", (request, response, next) => {    
    const size = request.params.size

    console.log(size)
 
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes
    WHERE size LIKE ?  
    `
    

    db.query(sql, [size], (error, results, fields) => {
        response.json(results)
        // console.log(results)
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




router.get("/shoes/brands/:brandId", (request, response, next) => {
    const brand = request.params.brandId
    console.log("nike")
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes WHERE brand = ?
    `
    db.query(sql,[brand], (error, results, fields) => {
        console.log("success")
        response.json(results)
    })
})

router.get("/shoes/:id", (request, response, next) => {
    console.log("hello")
    const id = request.params.id
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes WHERE playerid = ?
    `

    db.query(sql, [id], (error, results, fields) => {
        response.json(results)
    })
})

router.get("/playershoes/:id", (request, response, next) => {
    console.log("hello")
    const id = request.params.id
    const sql = `
    SELECT id, playerid, brand, shoe, size, color, pic, price
    FROM shoes WHERE playerid = ?
    `

    db.query(sql, [id], (error, results, fields) => {
        response.json(results)
    })
})

module.exports = router