import axios from "axios";
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
} from "./types";
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getPosts = () => async (dispatch) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  dispatch({
    type: GET_POSTS_LOADING,
  });
  await api
    .get("/posts")
    .then((results) => {
      // console.log(results);
      if (results) {
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: {results},
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: error.message,
      });
    });
};

export const getPost = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch({
    type: GET_POST_LOADING,
  });
  await api
    .get("/posts/:post_id", config)
    .then((result) => {
      console.log(result);
      if (result) {
        dispatch({
          type: GET_POST_SUCCESS,
          payload: result,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: GET_POST_FAILURE,
        payload: error.message,
      });
    });
};

export const createPost = () => async (dispatch) => {
  dispatch({
    type: CREATE_POST_LOADING,
  });
  await api
    .get("/posts")
    .then((createdPost) => {
      console.log(createdPost);
      if (createdPost) {
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: createdPost,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: error.message,
      });
    });
};

export const updatePost = () => async (dispatch) => {
  dispatch({
    type: UPDATE_POST_LOADING,
  });
  await api
    .get("/posts/:post_id")
    .then((updatePost) => {
      console.log(updatePost);
      if (updatePost) {
        dispatch({
          type: UPDATE_POST_SUCCESS,
          payload: updatePost,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: UPDATE_POST_FAILURE,
        payload: error.message,
      });
    });
};

export const deletePost = () => async (dispatch) => {
  dispatch({
    type: DELETE_POST_LOADING,
  });
  await api
    .get("/posts")
    .then((deletedPost) => {
      console.log(deletedPost);
      if (deletedPost) {
        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: deletedPost,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: DELETE_POST_FAILURE,
        payload: error.message,
      });
    });
};
