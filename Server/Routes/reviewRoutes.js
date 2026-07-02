const express = require("express");

const router = express.Router();

const validateReview = require("../Middleware/validateReview");

const {

createReview,

getReviews,

updateReview,

deleteReview,

likeReview

} = require("../Controllers/reviewController");



router.get("/",getReviews);

router.post("/",validateReview,createReview);

router.put("/:id",validateReview,updateReview);

router.delete("/:id",deleteReview);

router.patch("/:id/like",likeReview);

module.exports = router;