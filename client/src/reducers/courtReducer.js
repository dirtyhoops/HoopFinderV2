import {
  CREATE_COURT,
  DELETE_COURT,
  ADD_COURT_REVIEW,
  GET_COURTS,
  GET_COURT,
} from '../actions/types';

const initialState = {
  courts: [],
  featuredCourts: [],
  isCourtsLoaded: false,
  selectedCourt: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURTS:
      return {
        ...state,
        courts: payload,
      };
    default:
      return state;
  }
}
