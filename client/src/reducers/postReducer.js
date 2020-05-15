import {
  GET_POSTS_FOR_HOMEPAGE,
  GET_POSTS_WITH_ID,
  CREATE_POST,
  CREATE_COMMENT,
  DELETE_COMMENT,
  CLEAR_WALL_POSTS_WITH_ID,
  UPDATE_LIKES,
} from '../actions/types';

const initialState = {
  posts: [],
  postsHome: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_FOR_HOMEPAGE:
      return {
        ...state,
        postsHome: payload,
      };
    case GET_POSTS_WITH_ID:
      return {
        ...state,
        posts: payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case CREATE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.post_id
            ? { ...post, comments: payload.comments }
            : post
        ),
      };
    case CLEAR_WALL_POSTS_WITH_ID:
      return {
        ...state,
        posts: [],
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.post_id
            ? { ...post, likes: payload.likes }
            : post
        ),
        postsHome: state.postsHome.map((post) =>
          post._id === payload.post_id
            ? { ...post, likes: payload.likes }
            : post
        ),
      };
    default:
      return state;
  }
}
