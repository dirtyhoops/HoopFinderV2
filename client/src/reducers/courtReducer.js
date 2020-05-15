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
} from '../actions/types';

const initialState = {
  courts: [],
  featuredCourts: [],
  isCourtsLoaded: false,
  selectedCourt: null,
  addCourtSuccess: false,
  selectedCourtToEdit: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURTS:
      return {
        ...state,
        courts: payload,
      };
    case GET_COURT:
      return {
        ...state,
        selectedCourt: payload,
      };
    case GET_COURT_TO_EDIT:
      return {
        ...state,
        selectedCourtToEdit: payload,
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
    case DELETE_COURT:
      return {
        ...state,
        courts: state.courts.filter((court) => court._id !== payload),
      };
    default:
      return state;
  }
}
