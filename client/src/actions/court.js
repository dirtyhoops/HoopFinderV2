import axios from 'axios';
import {
  CREATE_COURT,
  DELETE_COURT,
  ADD_COURT_REVIEW,
  GET_COURTS,
  GET_COURT,
} from './types';

// Get all courts
export const getAllCourts = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courts`);

    dispatch({
      type: GET_COURTS,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: GET_COURTS_FAIL,
    // });
  }
};
