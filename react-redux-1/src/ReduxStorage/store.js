import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as TodoReducer } from "../features/Todos/reducer";

import { reducer as CounterReducer } from "../features/Counter/reducer";
const rootReducer = combineReducers({
  counterState: CounterReducer,
  todosState: TodoReducer,
});

// const logger1 = (store) => (next) => (action) => {
//   // console.log("Received action: ", action);
//   // next(action);
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);

//console.log(store.getState());
