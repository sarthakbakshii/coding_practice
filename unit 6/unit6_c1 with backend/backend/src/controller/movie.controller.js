const express = require("express");
const Movie = require("../modle/movie.modle");
const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const movie = Movie.find().lean().exec();
        return res.status(200).send(movie)
    } catch (e) {
        return res.status(500).send({error : e.message })
    }
})

module.exports = router