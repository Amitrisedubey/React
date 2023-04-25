import {
  GET_MOVIES_ERROR,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
} from "./actionTypes";

const initialState = { loading: false, movies: [], error: false };
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
