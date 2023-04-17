import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducer as TodoReducer } from "../features/Todos/reducer";

import { reducer as CounterReducer } from "../features/Counter/reducer";
const rootReducer = combineReducers({
  counterState: CounterReducer,
  todosState: TodoReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(store.getState());
