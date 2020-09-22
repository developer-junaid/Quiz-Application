import React, { useState, createContext } from "react";

export const InputContext = createContext();

export const InputProvider = (props) => {
  // Input States
  
  let [inputSubmitted, setInputSubmitted] = useState(false);

  
  return (
    <InputContext.Provider value={[inputSubmitted, setInputSubmitted]}>
      {props.children}
    </InputContext.Provider>
  );
};
