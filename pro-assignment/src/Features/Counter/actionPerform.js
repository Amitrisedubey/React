import { DEC_COUNT, INC_COUNT } from "./actionTypes";

export const IncCount = (count) => {
  return {
    type: INC_COUNT,
    payload: count,
  };
};

export const DecCount = (count) => {
  return {
    type: DEC_COUNT,
    payload: count,
  };
};
