const express = require('express');
const router = express.Router();
const findMovie = require("../controllers/movieController")

router.get('/', (req, res) => { 
    res.send('Content route hey'); 
});

router.get('/getmovies', findMovie)


module.exports = router;
