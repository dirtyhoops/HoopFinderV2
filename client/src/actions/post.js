import axios from 'axios';
import {
  GET_POSTS_FOR_HOMEPAGE,
  GET_POSTS_WITH_ID,
  CREATE_POST_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT,
  CLEAR_WALL_POSTS_WITH_ID,
  LIKE_POST,
  DISLIKE_POST,
} from './types';

// Get all the posts in the player's wall
export const getAllWallPosts = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/user/${user_id}`);

    // sort it the newest one on top - fix this in the api route date:-1
    dispatch({
      type: GET_POSTS_WITH_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: GET_POSTS_FAIL,
    // });
  }
};

// Create Post
export const createPost = (user_id, { text }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/posts/${user_id}`, { text }, config);
    dispatch({ type: CREATE_POST_SUCCESS });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      console.log(errors);
    }
  }
};

export const createComment = (post_id, { text }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/posts/${post_id}/comment`,
      { text },
      config
    );
    dispatch({ type: CREATE_COMMENT_SUCCESS });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      console.log(errors);
    }
  }
};

export const likePost = (post_id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/${post_id}/like`);

    // CHANGE THIS LATER, FIGURE OUT WHAT TO DISPATCH
    dispatch({ type: LIKE_POST });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      console.log(errors);
      console.log('not logged in cant do anything'); // CHANGE THIS LATER
    }
  }
};

// Clears the posts so it's easier when the selected user changes
export const clearPosts = () => async (dispatch) => {
  dispatch({ type: CLEAR_WALL_POSTS_WITH_ID });
};
