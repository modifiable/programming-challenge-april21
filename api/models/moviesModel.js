'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const Movie = new Schema({
        title: String,
        year: String,
        rating: Number,
        genres: Array
    });

// create and export model
module.exports = mongoose.model("movies", Movie);