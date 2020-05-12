import axios from 'axios';
import {
  CREATE_COURT,
  DELETE_COURT,
  ADD_COURT_REVIEW,
  GET_COURTS,
  GET_COURT,
  RESET_CREATE_COURT_SUCCESS,
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

    // MAKE SURE TO DISPATCH ALERT FOR SUCCESSFUL ADD
  } catch (err) {
    const errors = err.response.data.errors;

    // MAKE SURE TO DISPATCH ALERT

    if (errors) {
      // errors.forEach((error) => dispatch(setAelert(error.msg, 'danger')));
      console.log(errors);
    }
  }
};

// Delete court
export const deleteCourt = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/courts/${id}`);

    dispatch({
      type: DELETE_COURT,
      payload: id,
    });

    // DISPATCH SUCCESS MESSAGE LATER
    // dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    console.log('cant delete . fix this later - not an admin to delete');
    // MAKE SURE TO CHANGE THIS.. ADD A DISPATCH
    // dispatch({
    //   type: DELETE_COURT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

// Just resets the addCourtSuccess - it clears the add court form
export const clearAddCourtSuccess = () => async (dispatch) => {
  dispatch({ type: RESET_CREATE_COURT_SUCCESS });
};
