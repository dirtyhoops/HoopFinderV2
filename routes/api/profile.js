const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route       GET api/profile/me
// @desc        Get current user's profile
// @access      Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['firstName', 'lastName']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/profile
// @desc        Create/Update user profile
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('nickname', 'Nickname is required')
        .not()
        .isEmpty(),
      check('city', 'City is required')
        .not()
        .isEmpty(),
      check('state', 'State is required')
        .not()
        .isEmpty(),
      check('position', 'Position is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      nickname,
      avatar,
      backdrop,
      avatar_bg,
      state,
      city,
      position,
      feet,
      inches
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;

    if (nickname) profileFields.nickname = nickname;
    if (avatar) profileFields.avatar = avatar;
    if (backdrop) profileFields.backdrop = backdrop;
    if (avatar_bg) profileFields.avatar_bg = avatar_bg;
    if (state) profileFields.state = state;
    if (city) profileFields.city = city;
    if (position) profileFields.position = position;

    // Build height object
    profileFields.height = {};
    if (feet) profileFields.height.feet = feet;
    if (inches) profileFields.height.inches = inches;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
