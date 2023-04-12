import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  REMOVE_TODO,
  GET_TODO_SUCCESS,
} from "./actionTypes";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};
export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};
export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};

export const getTodoLoading = () => {
  return {
    type: GET_TODO_SUCCESS,
  };
};
export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};

export const getTodoError = (err) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: err,
  };
};
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
