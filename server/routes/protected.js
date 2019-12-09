const router = require('express').Router()

router.get('/goo', (req, res, next) => {
    res.json({
        message: 'be gone'
    })
})

module.exports = router