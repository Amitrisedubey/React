import { INC_COUNT } from "./actionTypes";
//action creators
export const incCount = (data) => {
  return { type: INC_COUNT, payload: data };
};
