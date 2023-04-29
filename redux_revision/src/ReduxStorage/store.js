import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { reducer } from "../Features/reducer";
import thunk from "redux-thunk";

export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);

console.log(store);
