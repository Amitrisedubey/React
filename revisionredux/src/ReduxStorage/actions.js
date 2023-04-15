import {
  ADD_TODO_SUCCESS,
  ADD_TODO_LOADING,
  ADD_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  DELETE_TODO,
  DELETE_TODO_ERROR,
} from "./actionTypes";

export const addTodoLoading = () => ({
  type: ADD_TODO_LOADING,
});

export const addTodoSuccess = (data) => ({
  type: ADD_TODO_SUCCESS,
  payload: data,
});

export const addTodoError = (err) => ({
  type: ADD_TODO_ERROR,
  payload: err,
});

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});

export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoError = (err) => ({
  type: GET_TODO_ERROR,
  payload: err,
});

// ReduxStorage/actions.js

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const deleteTodoError = (data) => ({
  type: DELETE_TODO_ERROR,
  payload: data,
});
