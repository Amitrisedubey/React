import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <MovieContext.Provider value={(text, handleInput)}>
      {children}
    </MovieContext.Provider>
  );
};
