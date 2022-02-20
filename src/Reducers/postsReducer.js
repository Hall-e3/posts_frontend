import {
  CREATE_POST_FAILURE,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_LOADING,
  UPDATE_POST_SUCCESS,
} from "../Actions/types";

const initialState = {
  posts: null,
  get_posts_loading: false,
  get_post_loading: false,
  create_post_loading: false,
  update_post_loading: false,
  delete_post_loading: false,
  is_loading: false,
  errors: null,
};
export default function Posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return {
        ...state,
        get_posts_loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        get_posts_loading: false,
        posts: action.payload,
      };

    case GET_POSTS_FAILURE:
      return {
        get_posts_loading: false,
        error: action.payload,
      };

    case GET_POST_LOADING:
      return {
        get_post_loading: true,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        get_post_loading: false,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : null
        ),
      };

    case GET_POST_FAILURE:
      return {
        get_post_loading: false,
        error: action.payload,
      };

    case UPDATE_POST_LOADING:
      return {
        update_post_loading: true,
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        update_post_loading: false,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case UPDATE_POST_FAILURE:
      return {
        update_post_loading: false,
        error: action.payload,
      };

    case CREATE_POST_LOADING:
      return {
        create_post_loading: true,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        create_post_loading: false,
      };

    case CREATE_POST_FAILURE:
      return {
        create_post_loading: false,
        error: action.payload,
      };

    case DELETE_POST_LOADING:
      return {
        delete_post_loading: true,
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        delete_post_loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    case DELETE_POST_FAILURE:
      return {
        delete_post_loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
