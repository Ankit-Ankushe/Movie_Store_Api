const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    id:{type:String , required: true},
    rank:{type:Number, required : true},
    title:{type:String , required : true},
    fullTitle:{type:String , required : true},
    year:{type:Number, required : true},
    image:{type:String , required : true},
    crew:{type:String , required : true},
    imDbRating:{type:Number , required : true},
    imDbRatingCount:{type:Number, required : true},
})

const Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie

