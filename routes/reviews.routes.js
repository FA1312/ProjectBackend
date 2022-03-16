const router = require('express').Router();
const Review = require('../models/Review');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.get('/', async (req, res, next) => {
  const reviews = await Review.find({});
  if (!reviews) {
    res.status(404).json('There are no reviews in this database');
  }
  res.status(200).json(reviews);
});

router.post('/', async (req, res) => {
  const { name, avatar, rating, reviewDescription } = req.body;
  const review = await Review.create({ name, avatar, rating, reviewDescription });
  res.status(201).json(review);
});

router.get('/:reviewId', async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review) {
    res.status(404).json('No review found');
  }
  res.status(200).json(review);
});

router.delete('/:reviewId', isAuthenticated, async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findByIdAndDelete(reviewId);
  if (!review) {
    res.status(404).json('No product was found');
  }
  res.status(204).json(review);
});

module.exports = router;
