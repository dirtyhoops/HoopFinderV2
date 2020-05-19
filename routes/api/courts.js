const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Court = require('../../models/Court');

// @route       GET api/courts
// @desc        Get all courts. only return _id, name, address, rating, iamges, checkedInPlayers,
// @access      Public
router.get('/', async (req, res) => {
  try {
    const courts = await Court.find(
      {},
      { name: 1, address: 1, rating: 1, images: 1, checkedInPlayers: 1 }
    ).sort({ dateCreated: -1 });
    res.json(courts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/courts/:id
// @desc        Get a court with id
// @access      Public
router.get('/:id', async (req, res) => {
  try {
    let selectedCourt = await Court.findById(req.params.id);

    if (!selectedCourt) {
      return res.status(400).json({ msg: 'Court not found' });
    }

    res.json(selectedCourt);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ msg: 'Court not found' });
    }

    res.status(500).send('Server Error');
  }
});

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
      check('images', 'Atleast 1 image is required').not().isEmpty(),
      check('street', 'Street is required').not().isEmpty(),
      check('city', 'City is required').not().isEmpty(),
      check('state', 'Street name is required').not().isEmpty(),
      check('zipcode', 'Zipcode is required').not().isEmpty(),
      check('surfaceType', 'Surface Type is required').not().isEmpty(),
      check('numberOfHoops', 'Number of Hoops is required').not().isEmpty(),
      check('rimHeight', 'Rim Height is required').not().isEmpty(),
      check('isIndoor', 'isIndoor is required').not().isEmpty(),
      check('isLighting', 'isLighting is required').not().isEmpty(),
      check('isPublic', 'isPublic is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Build new court object -- images, separate the strings and push it to array
    const courtFields = new Court({
      name: req.body.name,
      description: req.body.description,
      images: req.body.images.split(',').map((image) => image.trim()),
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
      },
      surfaceType: req.body.surfaceType,
      numberOfHoops: req.body.numberOfHoops,
      rimHeight: req.body.rimHeight,
      isIndoor: req.body.isIndoor,
      isLighting: req.body.isLighting,
      isPublic: req.body.isPublic,
    });

    try {
      // Check if user is an admin (only admin can add courts)
      if (req.user.isAdmin === false) {
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
      city: profile.city,
      state: profile.state,
      avatar: profile.avatar,
      avatar_bg: profile.avatar_bg,
    };

    try {
      const court = await Court.findById(req.params.id);

      if (!court) {
        return res.status(404).json({ msg: 'Court not found' });
      }

      // Add the review in front of the reviews array inside the court
      court.reviews.unshift(reviewFields);

      // ADD THE RATING AND CALCULATE IT
      if (court.reviews.length > 1) {
        const newRating =
          (court.rating * (court.reviews.length - 1) +
            parseInt(req.body.rating)) /
          court.reviews.length;

        // Update the rating value
        court.rating = newRating;
      }

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

// @route       DELETE api/courts/:id
// @desc        Delete a court by id (gotta be an admin to do so)
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const court = await Court.findById(req.params.id);

    if (!court) {
      return res.status(404).json({ msg: 'Court not found' });
    }

    // Check if the current logged in user is not the poster of the post
    if (req.user.isAdmin === false) {
      return res.status(401).json({
        msg: 'User not authorized to delete, not an admin',
      });
    }

    // Delete the court
    await court.remove();
    res.json({ msg: 'Court is successfully deleted' });
  } catch (err) {
    console.error(err.message);

    if (err.name === 'CastError') {
      res.status(400).json({ msg: 'Court not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route       PUT api/courts/:id
// @desc        Update a court
// @access      Private
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('images', 'Atleast 1 image is required').not().isEmpty(),
      check('street', 'Street is required').not().isEmpty(),
      check('city', 'City is required').not().isEmpty(),
      check('state', 'Street name is required').not().isEmpty(),
      check('zipcode', 'Zipcode is required').not().isEmpty(),
      check('surfaceType', 'Surface Type is required').not().isEmpty(),
      check('numberOfHoops', 'Number of Hoops is required').not().isEmpty(),
      check('rimHeight', 'Rim Height is required').not().isEmpty(),
      check('isIndoor', 'isIndoor is required').not().isEmpty(),
      check('isLighting', 'isLighting is required').not().isEmpty(),
      check('isPublic', 'isPublic is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Deconstruct
    const {
      name,
      description,
      street,
      city,
      state,
      zipcode,
      surfaceType,
      numberOfHoops,
      rimHeight,
      isIndoor,
      isLighting,
      isPublic,
      images,
    } = req.body;

    const courtFields = {};
    if (name) courtFields.name = name;
    if (description) courtFields.description = description;
    if (street) courtFields.street = street;
    if (city) courtFields.city = city;
    if (state) courtFields.state = state;
    if (zipcode) courtFields.zipcode = zipcode;
    if (surfaceType) courtFields.surfaceType = surfaceType;
    if (numberOfHoops) courtFields.numberOfHoops = numberOfHoops;
    if (rimHeight) courtFields.rimHeight = rimHeight;
    if (isIndoor) courtFields.isIndoor = isIndoor;
    if (isLighting) courtFields.isLighting = isLighting;
    if (isPublic) courtFields.isPublic = isPublic;
    if (images) {
      courtFields.images = images.split(',').map((image) => image.trim());
    }

    try {
      // Check if user is an admin (only admin can add courts)
      if (req.user.isAdmin === false) {
        return res
          .status(401)
          .json({ msg: 'User is not an admin, not authorized to add a court' });
      }

      let court = await Court.findOne({ _id: req.params.id });

      if (court) {
        court = await Court.findOneAndUpdate(
          { _id: req.params.id },
          { $set: courtFields },
          { new: true }
        );

        return res.json(court);
      }
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
// DELETE route - delete reviews along with it

module.exports = router;
