import React, { useState, useContext } from "react";
import "../App.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { inputPropsType } from "./../types/quiz_types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const InputCard: React.FC<inputPropsType> = ({
  questions,
  category,
  setCategory,
  setQuestions,
  level,
  setLevel,
  callback,
}) => {
  return (
    <div className="input-card-container">
      <h2>Select configurations</h2>
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
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                defaultValue={category}
                onChange={(event) => setCategory(Number(event.target.value))}
                required
                label="Category"
              >
                <MenuItem value={9}>General Knowledge</MenuItem>
                <MenuItem value={11}>Movies</MenuItem>
                <MenuItem value={17}>Science</MenuItem>
                <MenuItem value={18}>Computers</MenuItem>
                <MenuItem value={19}>Mathematics</MenuItem>
                <MenuItem value={21}>Sports</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="questions-dropdown">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Questions
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={questions}
                onChange={(event) => setQuestions(Number(event.target.value))}
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
                onChange={(event) => setLevel(event.target.value as string)}
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
