import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer.js";

const init = {
  count: 0,
  todo: [],
};

const store = new createStore(reducer, init); //Fixed
