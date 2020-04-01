const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

// @route       POST api/posts
// @desc        Create a post
// @access      Private
router.post(
  '/:user_id',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['firstName', 'lastName']);

    // Build new post object
    const postFields = new Post({
      text: req.body.text,
      user: req.params.user_id,
      poster: {
        user: req.user.id,
        firstName: profile.user.firstName,
        lastName: profile.user.lastName,
        avatar: profile.avatar
      }
    });

    try {
      // Check if the user_id is valid
      const user = await User.findById(req.params.user_id);

      if (!user) {
        return res
          .status(400)
          .json({ msg: 'User not found, cannot make a post' });
      }

      const post = await postFields.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      if (err.name == 'CastError') {
        return res
          .status(400)
          .json({ msg: 'User not found, cannot make a post' });
      }
      res.status(500).send('Server Error');
    }
  }
);

// @TODO: in action, check the parameters if it's someone's profile, if it is then just use the parameters for the post userid call. if it's empty(if a logged in user is on his page), call the posts post api with the REQ.USER.ID

module.exports = router;
