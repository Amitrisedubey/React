import { legacy_createStore as createStore } from "redux";
import { addTodo, toggleTodo } from "./action";
import { reducer } from "./reducer";

const initState = {
  todo: [],
};

var store = new createStore(reducer, initState);

console.log(store.getState());
store.dispatch(addTodo("Buy Bread"));

store.dispatch(addTodo("Buy Milk"));

store.dispatch(toggleTodo("Buy Milk"));

console.log(store.getState());

export default store;
