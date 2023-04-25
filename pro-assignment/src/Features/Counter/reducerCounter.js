import { DEC_COUNT, INC_COUNT } from "./actionTypes";
const initialState = {
  count: 0,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return {
        ...state,
        count: state.count + payload,
      };
    case DEC_COUNT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};
