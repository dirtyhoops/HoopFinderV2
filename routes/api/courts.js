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

// CHECK IN PLAYERS POST ROUTE --- HANDLE IS LIKE A 'LIKE POST ROUTE'. ALSO ADD AN AUTO DELETE AFTER 2 HOURS

// REVIEW POST ROUTE

module.exports = router;
