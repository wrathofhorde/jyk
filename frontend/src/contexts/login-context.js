import { createContext, useContext, useState } from "react";

const LoginContext = createContext(false);

const LoginContextProvider = ({ initValue, children }) => {
  const initState = useState(initValue);
  // console.log(initState);
  return (
    <LoginContext.Provider value={initState}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const value = useContext(LoginContext);
  if (value === undefined) {
    throw new Error("LoginContext is not defined");
  }
  return value;
};

export default LoginContextProvider;
