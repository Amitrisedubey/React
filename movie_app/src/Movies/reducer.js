import {
  GET_MOVIES_ERROR,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
} from "./actionTypes";
const init = { loading: false, moviess: {}, error: false };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        moviess: payload,
        loading: false,
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
