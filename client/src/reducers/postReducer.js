import {
  GET_POSTS_FOR_HOMEPAGE,
  GET_POSTS_WITH_ID,
  CREATE_POST_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT,
} from '../actions/types';

const initialState = {
  posts: [],
  postsHome: [],
  isCreatingPostSuccessful: false,
  isPostLoadedHome: false,
  isCreatingCommentSuccessful: false,
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
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isCreatingCommentSuccessful: true,
      };
    default:
      return state;
  }
}
