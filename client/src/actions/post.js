import axios from 'axios';
import {
  GET_POSTS_FOR_HOMEPAGE,
  GET_POSTS_WITH_ID,
  CREATE_POST,
  CREATE_COMMENT,
  DELETE_COMMENT,
  CLEAR_WALL_POSTS_WITH_ID,
  UPDATE_LIKES
} from './types';

// Get all the posts(12 this time)
export const getAllPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');

    // sort it the newest one on top - fix this in the api route date:-1
    dispatch({
      type: GET_POSTS_FOR_HOMEPAGE,
      payload: res.data
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: GET_POSTS_FAIL,
    // });
  }
};

// Get all the posts in the player's wall
export const getAllWallPosts = user_id => async dispatch => {
  // Clear all the post before loading all posts for a user with the given ID
  dispatch({ type: CLEAR_WALL_POSTS_WITH_ID });

  try {
    const res = await axios.get(`/api/posts/user/${user_id}`);

    // sort it the newest one on top - fix this in the api route date:-1
    dispatch({
      type: GET_POSTS_WITH_ID,
      payload: res.data
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: GET_POSTS_FAIL,
    // });
  }
};

// Create Post
export const createPost =
  (user_id, { text }) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(`/api/posts/${user_id}`, { text }, config);
      dispatch({ type: CREATE_POST, payload: res.data });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log(errors);
      }
    }
  };

export const createComment =
  (post_id, { text }) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(
        `/api/posts/${post_id}/comment`,
        { text },
        config
      );
      dispatch({
        type: CREATE_COMMENT,
        payload: { post_id, comments: res.data }
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log(errors);
      }
    }
  };

// Like a post
export const likePost = post_id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${post_id}/like`);

    dispatch({ type: UPDATE_LIKES, payload: { post_id, likes: res.data } });
  } catch (err) {
    // dispatch({
    //   type: POST_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });

    console.log('not logged in cant do anything'); // CHANGE THIS LATER
  }
};

// Unlike a post
export const unlikePost = post_id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${post_id}/unlike`);

    dispatch({ type: UPDATE_LIKES, payload: { post_id, likes: res.data } });
  } catch (err) {
    // dispatch({
    //   type: POST_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });

    console.log('not logged in cant do anything'); // CHANGE THIS LATER
  }
};
