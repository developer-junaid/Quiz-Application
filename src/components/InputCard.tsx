import React, { useState, useContext } from "react";
import "../App.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { inputPropsType } from "./../types/quiz_types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";   
import { InputContext } from "../context/InputContext";

const InputCard: React.FC<inputPropsType> = ({ callback }) => {
  // use Context
  let [questions, setQuestions, level, setLevel] = useContext(InputContext);

  const handleQuestionChange = (event) => {
    setQuestions(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };



  return (
    <div className="input-card-container">
      <h2>Select no of questions and difficulty level :</h2>
      <div className="select">
        <form
          className="question-form"
          action=""
          onSubmit={(e: React.FormEvent<EventTarget>) =>
            callback(e, questions, level)
          }
        >
          <div className="questions-dropdown">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Questions
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={questions}
                onChange={handleQuestionChange}
                required
                label="Questions"
              >
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={15}>Fifteen</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="questions-dropdown">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Difficulty
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={level}
                onChange={handleLevelChange}
                required
                label="Questions"
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
          <input className="submit-btn" value="Start Quiz" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default InputCard;
