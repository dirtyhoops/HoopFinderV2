import axios from 'axios';
import {
  GET_POSTS,
  GET_POSTS_WITH_ID,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from './types';

// Get all the posts in the player's wall
export const getAllWallPosts = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/post/user/${user_id}`);

    // sort it the newest one on top
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
