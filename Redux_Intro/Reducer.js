import { INC_COUNT, DEC_COUNT, ADD_TODO } from "./actionTypes.js";
//pure function
//fixed
export const reducer = (states, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { ...states, count: states.count + payload };
    case DEC_COUNT:
      return { ...states, count: states.count - payload };
    case ADD_TODO:
      return { ...states, todo: [...states.todo, payload] };
    default:
      return states;
  }
};
