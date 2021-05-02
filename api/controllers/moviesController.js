// import Movies Model
const  Movie = require("../models/moviesModel");
// DEFINE CONTROLLER FUNCTIONS

// getKRating function - List top K rated movies
exports.getKRating = (req, res) => {
    kMovies = parseInt(req.params.kMovies.substring(1));
    
    pipeline = [{"$sort": {"rating": -1}},
                {"$limit": kMovies}
                ];
    
    Movie.aggregate(pipeline, (err, movies) => {
        if (err) {
            res.status(500).send(err);
        }
            res.status(200).json(movies);
    });
};