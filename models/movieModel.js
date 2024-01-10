const mongoose = require('mongoose');

// Define the schema for the Movie collection
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    imdbRating: {
        type: Number,
        required: true
    },
    tags: {
        type: [String], // Assuming tags can be an array of strings
        required: true
    }
});

// Create the Movie model based on the movieSchema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
