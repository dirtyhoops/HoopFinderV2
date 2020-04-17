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
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['firstName', 'lastName']);

    // Build new post object
    const postFields = new Post({
      text: req.body.text,
      user: req.params.user_id,
      poster: {
        user: req.user.id,
        firstName: profile.user.firstName,
        lastName: profile.user.lastName,
        avatar: profile.avatar,
        avatar_bg: profile.avatar_bg,
        city: profile.city,
        state: profile.state,
      },
      ownPost: false,
    });

    try {
      // Check if the user_id is valid
      const user = await User.findById(req.params.user_id);

      if (!user) {
        return res
          .status(404)
          .json({ msg: 'User not found, cannot make a post' });
      }

      // Just checking if the logged in user is posting on his/her own wall
      if (req.params.user_id === req.user.id) {
        postFields.ownPost = true;
      }

      const post = await postFields.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      if (err.name === 'CastError') {
        return res
          .status(400)
          .json({ msg: 'User not found, cannot make a post' });
      }
      res.status(500).send('Server Error');
    }
  }
);

// @route       GET api/posts/user/:user_id
// @desc        Get all user's posts for user_id
// @access      Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.user_id }).sort({
      dateCreated: -1,
    });

    // If there are no posts
    if (posts.length < 1) {
      return res.status(404).json({ msg: 'No posts for this user' });
    }

    res.json(posts);
  } catch (err) {
    console.error(err.message);

    if (err.name === 'CastError') {
      res.status(400).json({ msg: 'No posts for this user' });
    }

    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/posts/:id
// @desc        Delete post by id (a user can only delete their own posts)
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check if the current logged in user is not the poster of the post
    if (post.poster.user.toString() !== req.user.id) {
      return res.status(401).json({
        msg: 'User not authorized to delete',
      });
    }

    // @TODO: delete
    await post.remove();
    res.json({ msg: 'Post is successfully deleted' });
  } catch (err) {
    console.error(err.message);

    if (err.name === 'CastError') {
      res.status(400).json({ msg: 'Post not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route       PUT api/posts/:id/like
// @desc        Like a post (Edit the post)
// @access      Private
router.put('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has been liked by the logged in user already
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: 'Post has already been liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       PUT api/posts/:id/like
// @desc        Like a post (Edit the post)
// @access      Private
router.put('/:id/unlike', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has been liked by the logged in user already
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    // Splice the index in the likes array
    post.likes.splice(removeIndex, 1);

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/posts/:id/comment
// @desc        Create a comment to a post
// @access      Private
router.post(
  '/:id/comment',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Look for logged in user's profile so we can pull out the avatar
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['firstName', 'lastName']);

    const commentFields = {
      text: req.body.text,
      user: req.user.id,
      firstName: profile.user.firstName,
      lastName: profile.user.lastName,
      avatar: profile.avatar,
    };

    try {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
      }

      // Add the comment object in front of the comments array
      post.comments.unshift(commentFields);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);

      if (err.name === 'CastError') {
        res.status(400).json({ msg: 'Post not found' });
      }

      res.status(500).send('Server Error');
    }
  }
);

// @route       DELETE api/posts/:id/comment/:comment_id
// @desc        Delete a comment
// @access      Private
router.delete('/:id/comment/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post does not exist' });
    }

    // Pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized to delete' });
    }

    // Get remove index
    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.log(err.message);
    if (err.name === 'CastError') {
      res.status(400).json({ msg: 'Post/Comment not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @TODO: in action, check the parameters if it's someone's profile, if it is then just use the parameters for the post userid call. if it's empty(if a logged in user is on his page), call the posts post api with the REQ.USER.ID

module.exports = router;
