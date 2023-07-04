import { createContext, useState, useContext } from "react";

const FoodsContext = createContext({ foodType: [], foodList: [] });

const FoodsContextProvider = ({ initValue, children }) => {
  const initValue = useState(initValue);
  console.log(initValue);
  return (
    <FoodsContext.Provider value={initValue}>{children}</FoodsContext.Provider>
  );
};

export const useFoodsContext = () => {
  const value = useContext(FoodsContext);
  if (value === undefined) {
    throw new Error("FoodsContext is not defined");
  }
  return value;
};

export default FoodsContextProvider;
