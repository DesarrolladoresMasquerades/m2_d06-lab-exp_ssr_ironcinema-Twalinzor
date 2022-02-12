const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

//GET MOVIE DETAILS
router.get("/movies/:id", (req, res)=>{
    const movieId = req.params.id;

    Movie.findById(movieId)
        .then((movie)=>{
            res.render("movie-details", movie)
        })
        .catch(err=>console.log(err))
})

// GET LISTED MOVIES
router.get("/movies", (req, res)=>{
    Movie.find()
        .then((movies)=>{
            res.render("movies", {movies})
        })
        .catch(err=>console.log(err))
})

module.exports = router;