const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    genre: { type : String , required : true},
    image_url: { type : String , required : true},
    movie_name: { type : String , required : true},
    rating: { type : Number , required : true},
    release_date: { type : String , required : true},
},{
    timestamps : true , versionKey : false
});

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;