const Review = require("../models/Review");


// CREATE REVIEW

exports.createReview = async (req,res)=>{

try{

const review = await Review.create(req.body);

res.status(201).json({

success:true,

review

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};



// GET ALL REVIEWS

exports.getReviews = async(req,res)=>{

try{

const reviews = await Review.find().sort({createdAt:-1});

res.json({

success:true,

count:reviews.length,

reviews

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};



// LIKE REVIEW

exports.likeReview = async(req,res)=>{

try{

const review = await Review.findById(req.params.id);

if(!review){

return res.status(404).json({

success:false,

message:"Review not found"

});

}

review.likes++;

await review.save();

res.json({

success:true,

likes:review.likes

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};




// UPDATE REVIEW

exports.updateReview = async(req,res)=>{

try{

const review = await Review.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true,

runValidators:true

}

);

if(!review){

return res.status(404).json({

success:false,

message:"Review not found"

});

}

res.json({

success:true,

review

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};




// DELETE REVIEW

exports.deleteReview = async(req,res)=>{

try{

const review = await Review.findByIdAndDelete(req.params.id);

if(!review){

return res.status(404).json({

success:false,

message:"Review not found"

});

}

res.json({

success:true,

message:"Review deleted"

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};