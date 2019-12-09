const router = require("express").Router()
const uuid = require('uuid/v4')
const sha512 = require('js-sha512')
const db = require('../db')
const config = require('config')
const jwt = require('jsonwebtoken')

router.post("/register", (req, res, next) => {
  const salt = uuid()
  const username = req.body.username
  const password = sha512(req.body.password + salt)

  const sql = `INSERT INTO users (username, password, salt) VALUES (?, ?, ?)`

  db.query(sql, [username, password, salt], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }

    res.json({
      message: 'User created',
      results
    })
  })
})

router.post('/login', (req, res, next) => {
  const username = req.body.username
  let password = req.body.password

  db.query('SELECT salt FROM users WHERE username = ?', [username], (err, results, fields) => {
    if (results.length > 0 ) {
      console.log(results)
      password = sha512(password + results[0].salt)
      console.log(password)

      const sql = `
      SELECT COUNT(1) as count FROM users WHERE username = ? AND password = ?
      `

      db.query(sql, [username, password], (err, results, fields) => {
        console.log(results)
        if (results[0].count > 0) {
          const token = jwt.sign({username}, config.get('secret'))

          res.json({
            message: 'Authenticated',
            token 
          })
        } else {
          res.status(401).json({
            message: "Username or Password are incorrect"
          })
        }
      })
    } else {
      res.status(401).json({
        message: "User doesn't exist"
      })
    }
  })
})

// profiles
const profilePic = []

router.post("/profilePic", (req, res, next) => {
  const id = going.length + 1
  const username = req.body.username
  username.id = id

  profilePic.push(username)
  res.json(username)
})

router.get("/profilePic", (req, res, next) => {
  res.json(profilePic)
})

// MIGHT COME BACK TO THIS FOR POSTING PROFILE PICS
// router.post("/profiles", (req, res, next) => {
//   const picurl = req.body.picurl

//   const sql = `INSERT INTO users (picurl) VALUES (?) WHERE username = ?`

//   db.query(sql, [picurl], (err, results, fields) => {
//     if (err) {
//       throw new Error(err)
//     }

//     res.json({
//       message: 'pic inserted',
//       results
//     })
//   })
// })

// router.get("/profiles/:username", (req, res, next) => {
//   const username = req.params.username

//   const sql = `
//   SELECT picurl
//   FROM users
//   WHERE username = ? 
//   `

//   db.query(sql, [username], (error, results, fields) => {
//       response.json(results)
//   })
// })

module.exports = router
