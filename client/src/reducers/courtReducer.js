import {
  CREATE_COURT,
  DELETE_COURT,
  ADD_COURT_REVIEW,
  GET_COURTS,
  GET_COURT,
  RESET_CREATE_COURT_SUCCESS,
} from '../actions/types';

const initialState = {
  courts: [],
  featuredCourts: [],
  isCourtsLoaded: false,
  selectedCourt: null,
  addCourtSuccess: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURTS:
      return {
        ...state,
        courts: payload,
      };
    case CREATE_COURT:
      return {
        ...state,
        courts: [payload, ...state.courts],
        addCourtSuccess: true,
      };
    case RESET_CREATE_COURT_SUCCESS:
      return {
        ...state,
        addCourtSuccess: false,
      };
    default:
      return state;
  }
}
