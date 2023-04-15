import { DEC_COUNT, INC_COUNT } from "./actionTypes";

export const incCount = (count) => {
  return {
    type: INC_COUNT,
    payload: count,
  };
};

export const decCount = (count) => {
  return {
    type: DEC_COUNT,
    payload: count,
  };
};
