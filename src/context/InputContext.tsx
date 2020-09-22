import React, { useState, createContext } from "react";

export const InputContext = createContext();

export const InputProvider = (props) => {
  // Input States
  const [questions, setQuestions] = useState(10);
  const [level, setLevel] = useState("easy");
  const [inputSubmitted, setInputSubmitted] = useState(false);

  
  return (
    <InputContext.Provider value={[questions, setQuestions, level, setLevel,inputSubmitted, setInputSubmitted]}>
      {props.children}
    </InputContext.Provider>
  );
};
