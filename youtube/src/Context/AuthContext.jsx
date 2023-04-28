import { createContext } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  <SearchContext.Provider>{children}</SearchContext.Provider>;
};
