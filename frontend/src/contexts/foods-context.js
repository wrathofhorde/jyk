import { createContext, useState, useContext } from "react";

const FoodsContext = createContext({ foodtype: [], items: [] });

export const FoodsContextProvider = ({ initValue, children }) => {
  const initState = useState(initValue);
  // console.log(initState);
  return (
    <FoodsContext.Provider value={initState}>{children}</FoodsContext.Provider>
  );
};

export const useFoodsContext = () => {
  const value = useContext(FoodsContext);
  if (value === undefined) {
    throw new Error("FoodsContext is not defined");
  }
  return value;
};

export default useFoodsContext;
