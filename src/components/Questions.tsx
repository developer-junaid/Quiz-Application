import React, { useState } from "react"
import {  FormControl,  FormControlLabel,  RadioGroup,  Radio} from "@material-ui/core"
import { questionPropsType } from "./../types/quiz_types"
import "./../styles/css/questions.css"

const Questions: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
  totalQuestions,
  currentQuestion,
}) => {
  // Answer state
  let [selectedAns, setSelectedAns] = useState("")

  // Handle Selection
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAns(event.target.value)
  }

  // Radio
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAns(event.target.value)
  }

  return (
    <div className="questions-container">
      <h1>
        Questions: {++currentQuestion} / {totalQuestions}
      </h1>
      <h3>{question}</h3>
      <form
        className="question-form"
        action=""
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="option"
            name="option"
            value={selectedAns}
            onChange={handleChange}
          >
            {options.map((option, index) => {
              return (
                <div key={index}>
                  <FormControlLabel
                    value={option}
                    className='form-label'
                    control={<Radio required={true} />}
                    label={option}
                  />
                </div>
              )
            })}
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
