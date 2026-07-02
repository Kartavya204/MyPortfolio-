const { body, validationResult } = require("express-validator");

const validateReview = [

body("name")
.trim()
.notEmpty()
.withMessage("Name is required")
.isLength({ min:2,max:50 }),

body("message")
.trim()
.notEmpty()
.withMessage("Message is required")
.isLength({ min:5,max:500 }),

body("rating")
.isInt({min:1,max:5})
.withMessage("Rating must be between 1 and 5"),

(req,res,next)=>{

const errors = validationResult(req);

if(!errors.isEmpty()){

return res.status(400).json({

success:false,

errors:errors.array()

});

}

next();

}

];

module.exports = validateReview;