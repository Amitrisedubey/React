import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as CounterReducer } from "../features/Counter/reducer";
import { reducer as TodoReducer } from "../features/Todos.js/reducer";
const rootReducer = combineReducers({
  counterState: CounterReducer,
  todoState: TodoReducer,
});

// const logger = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
console.log(store.getState());
