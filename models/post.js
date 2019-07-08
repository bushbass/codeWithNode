const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const PostSchema = new Schema({
    title: {type:String},
    price: {type: String},
    description: {type: String},
    images: [ String],
    location: {type: String},
    lat: Number,
    long: Number,
    author: {type: Schema.Types.ObjectId,
    ref: "User"},
    reviews: [
        {type: Schema.Types.ObjectId,
        ref: "Review"}
    ]
})



module.exports = mongoose.model("Post", PostSchema)