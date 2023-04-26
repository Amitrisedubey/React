import {
  GET_MOVIES_ERROR,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
} from "./actionTypes";

export const getMoviesLoading = () => {
  return {
    type: GET_MOVIES_LOADING,
  };
};

export const getMoviesSuccess = (data) => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: data,
  };
};

export const getMoviesError = (error) => {
  return {
    type: GET_MOVIES_ERROR,
    payload: error,
  };
};
