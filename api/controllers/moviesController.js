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

// findByYearAndGenre function - List movies by year and genre
exports.findByYearAndGenre = (req, res) => {
    year = req.params.year.substring(1);
    genre = req.params.genre.substring(1);

    pipeline = [{"$match": {"year": year}},
                {"$match": 
                    {"$expr": 
                        {"$in": [genre, "$genres"]}
                    }
                }];
    
    Movie.aggregate(pipeline, (err, movies) => {
        if (err) {
            res.status(500).send(err);
        }
            res.status(200).json(movies);
    });
};