import { createContext, useContext, useState } from "react";

const loginContext = createContext(false);

const LoginContextProvider = ({ initValue, children }) => {
  const initState = useState(initValue);
  console.log(initState);
  return (
    <loginContext.Provider value={initState}>{children}</loginContext.Provider>
  );
};

export const useLoginContext = () => {
  const value = useContext(loginContext);
  if (value === undefined) {
    throw new Error("loginContext is not defined");
  }
  return value;
};

export default LoginContextProvider;
