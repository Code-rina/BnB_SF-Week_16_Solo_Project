const express = require('express');
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const csrf = require("csurf");
const { User, Spot, Image, Review } = require("../../db/models");
const csrfProtection = csrf({ cookie: true });
const router = express.Router()

router.get(
  "/spots/:id/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      where: {
        spotId: parseInt(req.params.id, 10),
      },
    });
    // console.log("reviews", reviews)
    return res.json(reviews);
  })
);

router.post(
  "/spots/:id/",
  asyncHandler(async (req, res) => {
    const { userId, spotId, rating, review } = req.body;
    const reviews = await Review.create({ userId, spotId, rating, review });
    return res.json(reviews);
  })
);

router.put(
  "/:reviewId/",
  asyncHandler(async (req, res) => {
    const { userId, spotId, rating, review, id} = req.body;
    // console.log("userId", userId)
    // console.log("spotId", spotId)
    // console.log("rating", rating)
    // console.log("review", review)
    // console.log("id", id)
    // console.log("req.body-3rd", req.body)

    const reviewId = await Review.findByPk(id)
    // console.log("reviewId-backend", reviewId)
    const updatedReview = await reviewId.update(req.body)
    // console.log("updatedReview-backend", updatedReview)

    // console.log('11111', updatedReview)
    return res.json(updatedReview)
  })
);

router.delete(
  "/spots/:id/",
  asyncHandler(async (req, res) => {
    const reviewId = Number(req.params.id);
    console.log("reviewId", reviewId)
    Review.destroy({
      where: {
        id: reviewId,
      },
    });
    return res.json(reviewId);
  })
);

module.exports = router;

