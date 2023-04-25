import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./actionTypes";
const initialState = { loading: false, todo: [], error: false };
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todo: [...state.todo, payload],
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todo: payload,
        loading: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
