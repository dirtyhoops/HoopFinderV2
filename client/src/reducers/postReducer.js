import {
  GET_POSTS_FOR_HOMEPAGE,
  GET_POSTS_WITH_ID,
  CREATE_POST_SUCCESS,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from '../actions/types';

const initialState = {
  posts: [],
  postsHome: [],
  isCreatingPostSuccessful: false,
  isPostLoadedHome: false,
  isCommentSuccessful: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_FOR_HOMEPAGE:
      return {
        ...state,
        postsHome: payload,
        isPostLoadedHome: true,
      };
    case GET_POSTS_WITH_ID:
      return {
        ...state,
        posts: payload,
        isCreatingPostSuccessful: false,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isCreatingPostSuccessful: true,
      };
    default:
      return state;
  }
}
