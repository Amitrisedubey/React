//reducer
const reducer = (state, action) => ({
  ...state,
  ...action.payload,
});
//action is an object
//action has some types and payload
//initial state
const initState = {
  counter: 0,
};

//////////////////////////////////////////////////////////////
class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }
  //retrieve the state from reducer
  getState() {
    return this.state;
  }
  //dispatch and action
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}
/////////////////////////////////////////////////////////////

var store = new Store(reducer, { counter: 0 });

console.log(store.getState());
store.dispatch({ type: "UPDATE", payload: { counter: 10 } });
console.log(store.getState());
