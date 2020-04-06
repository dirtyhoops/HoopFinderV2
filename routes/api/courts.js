const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Court = require('../../models/Court');

// @route       GET api/courts
// @desc        Test route
// @access      Public
router.get('/', (req, res) => res.send('Courts route'));

// @route       POST api/courts
// @desc        Create a court
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('street', 'Street is required').not().isEmpty(),
      check('city', 'City is required').not().isEmpty(),
      check('state', 'Street name is required').not().isEmpty(),
      check('zipcode', 'Zipcode is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Build new court object
    const courtFields = new Court({
      name: req.body.name,
      description: req.body.description,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
      },
    });

    try {
      // Check if user is an admin (only adming can add courts)
      const user = await User.findById(req.user.id);

      if (user.isAdmin === false) {
        return res
          .status(401)
          .json({ msg: 'User is not an admin, not authorized to add a court' });
      }

      // CHECK IF THE NAME ALREADY EXISTS

      const court = await courtFields.save();
      res.json(court);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       POST api/courts/:id/review
// @desc        Create a review  for a court
// @access      Private
router.post(
  '/:id/review',
  [
    auth,
    [
      check('text', 'Text is required').not().isEmpty(),
      check('rating', 'Rating is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Look for logged in user's profile so we can pull out the avatar
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['firstName', 'lastName']);

    const reviewFields = {
      text: req.body.text,
      rating: req.body.rating,
      user: req.user.id,
      firstName: profile.user.firstName,
      lastName: profile.user.lastName,
      avatar: profile.avatar,
    };

    try {
      const court = await Court.findById(req.params.id);

      if (!court) {
        return res.status(404).json({ msg: 'Court not found' });
      }

      // Add the review in front of the reviews array inside the court
      court.reviews.unshift(reviewFields);

      // ADD THE RATING AND CALCULATE IT
      const newRating =
        (court.rating + parseInt(req.body.rating, 10)) / court.reviews.length;

      // Update the rating value
      court.rating = newRating;

      await court.save();

      res.json(court);
    } catch (err) {
      console.error(err.message);
      if (err.name === 'CastError') {
        res.status(400).json({ msg: 'Court not found' });
      }

      res.status(500).send('Server Error');
    }
  }
);

// CHECK IN PLAYERS POST ROUTE --- HANDLE IS LIKE A 'LIKE POST ROUTE'. ALSO ADD AN AUTO DELETE AFTER 2 HOURS

// REVIEW POST ROUTE

// RATINGS POST ROUTE. pull out and add all the reviews.rating then divide it by the total numbers

module.exports = router;
