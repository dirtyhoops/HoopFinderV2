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

// CREATE A CALL THAT ONLY PULLS UP 4 COURTS FOR LANDING PAGE

// Create Court
export const createCourt = ({ formData }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/courts', formData, config);

    dispatch({ type: CREATE_COURT, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach((error) => dispatch(setAelert(error.msg, 'danger')));
      console.log(errors);
    }
  }
};
