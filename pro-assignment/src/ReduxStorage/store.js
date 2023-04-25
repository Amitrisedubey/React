import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { reducer as counterReducer } from "../Features/Counter/reducerCounter";
import { reducer as todoCounter } from "../Features/Todos/todosReducer";
import { reducer as movieReducer } from "../Features/Movies/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  counterState: counterReducer,
  todosState: todoCounter,
  movieState: movieReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
console.log(store.getState());
