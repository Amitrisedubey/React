class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}
const initState = {
  todo: [],
};
const reducer = (states, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...states,
        todo: [...states.todo, payload],
      };
    case "TOGGLE_TODO":
      return {
        ...states,
        todo: states.todo.map((items) =>
          items.title === payload ? { ...items, status: !items.status } : items
        ),
      };
    default:
      return states;
  }
};
const store = new Store(reducer, initState);
console.log(store.getState());
store.dispatch({
  type: "ADD_TODO",
  payload: { title: "Buy Bread", status: false },
});
store.dispatch({
  type: "ADD_TODO",
  payload: { title: "Buy Milk", status: false },
});

console.log(store.getState());
store.dispatch({
  type: "TOGGLE_TODO",
  payload: "Buy Milk",
});
console.log(store.getState());
