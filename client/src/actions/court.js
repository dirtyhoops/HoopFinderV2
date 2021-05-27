import axios from 'axios';
import {
  CREATE_COURT,
  DELETE_COURT,
  ADD_COURT_REVIEW,
  GET_COURTS,
  GET_COURT,
  GET_COURT_TO_EDIT,
  RESET_CREATE_COURT_SUCCESS,
  CLEAR_SELECTED_COURT,
  RESET_EDIT_COURT,
  GET_SELECTED_COURT_WEATHER,
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
    //   type: COURT_ERROR,
    // });
  }
};

// Get a court with id
export const getCourt = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courts/${id}`);
    dispatch({
      type: GET_COURT,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: COURT_ERROR,
    //   payload: {
    //     status: err.response.status,
    //     statusText: err.response.statusText,
    //   },
    // });
  }
};

// Get a court to edit with and ID
export const getCourtToEdit = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courts/${id}`);
    dispatch({
      type: GET_COURT_TO_EDIT,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: COURT_ERROR,
    //   payload: {
    //     status: err.response.status,
    //     statusText: err.response.statusText,
    //   },
    // });
  }
};

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

// Gets the Weather forecast for the selected court using WeatherAPI
export const getWeather = (zipcode) => async (dispatch) => {
  const weatherAPI = process.env.REACT_APP_WEATHER_API_KEY;

  console.log('api', weatherAPI);

  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=9b1b3e3a7aeca410a9fccd080e5335d9`
    );

    dispatch({
      type: GET_SELECTED_COURT_WEATHER,
      payload: res.data,
    });
  } catch (err) {
    console.log('CANT WEATHER. MAYBE ZIPCODE IS INVALID ---fix this later');

    // dispatch({
    //   type: COURT_ERROR,
    // });
  }
};

// Create/add review
export const addReview = (id, { formData }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/courts/${id}/review`, formData, config);

    dispatch({ type: ADD_COURT_REVIEW, payload: res.data.reviews[0] });

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

// Just resets the addCourtSuccess - it clears the add court form
export const clearAddCourtSuccess = () => async (dispatch) => {
  dispatch({ type: RESET_CREATE_COURT_SUCCESS });
};
