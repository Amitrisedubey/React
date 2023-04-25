import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./actionTypes";

export const addTodoloading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};
export const getTodoloading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};
export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    payload: error,
  };
};

export const getTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload: error,
  };
};

export const getData = () => (dispatch) => {
  dispatch(getTodoloading());
  fetch("http://localhost:3001/todos")
    .then((d) => d.json())
    .then((data) => {
      dispatch(getTodoSuccess(data));
    })
    .catch((e) => {
      dispatch(getTodoError(e));
    });
};
