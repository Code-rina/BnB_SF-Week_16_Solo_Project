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

    const reviewId = await Review.findByPk(id)

    const updatedReview = await reviewId.update(req.body)

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

