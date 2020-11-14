import React from "react"
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core"
import "./../styles/css/questions.css"

const Questions = () => {
  return (
    <div className="questions-container">
      <h1>Questions: 2/5</h1>
      <h3>
        Which company was established on April 1st, 1976 by Steve Jobs, Steve
        Wozniak and Ronald Wayne?
      </h3>
      <form className="question-form" action="">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="option"
            name="option"
            // value={selectedAns}
            // onChange={handleChange}
          >
            <FormControlLabel
              className="form-label"
              value="Microsoft"
              control={<Radio required={true} />}
              label="Microsoft"
            />
            <FormControlLabel
              value="Atari"
              className="form-label"
              control={<Radio required={true} />}
              label="Atari"
            />
            <FormControlLabel
              className="form-label"
              value="Apple"
              control={<Radio required={true} />}
              label="Apple"
            />
            <FormControlLabel
              className="form-label"
              value="Commodore"
              control={<Radio required={true} />}
              label="Commodore"
            />
          </RadioGroup>
        </FormControl>
        <input
          className="submit-btn"
          type="submit"
          value="Submit and Proceed"
        />
      </form>
    </div>
  )
}

export default Questions
