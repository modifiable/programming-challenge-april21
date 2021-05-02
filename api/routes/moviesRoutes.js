'use strict';

// create App function
    module.exports = function(app) {
        var moviesController = require('../controllers/moviesController');

        app
        .route("/rating:kMovies")
        .get(moviesController.getKRating)

    };
