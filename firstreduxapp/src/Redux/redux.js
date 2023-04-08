//Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

//Action creators
const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: {
    title: payload,
    status: false,
  },
});

const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});
//Reducer

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === payload ? { ...item, status: !item.status } : item
        ),
      };
    default:
      return state;
  }
};
// 1. action is an object
// 2. action has some types and payload

// initial state

const initState = {
  todo: [],
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }
  //retriev the state from reducer
  getState() {
    return this.state;
  }

  //dispatch an action to reducer
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(reducer, initState);
console.log(store.getState());
store.dispatch(addTodo("Buy Milk"));
console.log(store.getState());

store.dispatch(addTodo("Buy Bread"));
console.log(store.getState());

store.dispatch({
  type: TOGGLE_TODO,
  payload: "Buy Bread",
});
console.log(store.getState());
