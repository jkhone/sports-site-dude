const createError = require("http-errors")
const express = require("express")
const basketballRouter = require("./routes/basketball")
// users
const userRouter = require("./routes/users")
const config = require('config')
const jwt = require('express-jwt')
const protectedRouter = require('./routes/protected')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", basketballRouter)
// users
app.use("/", userRouter)
app.use("/", jwt({secret: config.get('secret')}), protectedRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  console.log(err)
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
