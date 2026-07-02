const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },

    message:{
        type:String,
        required:true,
        trim:true,
        maxlength:500
    },

    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },

    likes:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Review",reviewSchema);