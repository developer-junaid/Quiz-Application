import React, { useState } from "react";
import { questionPropsType } from "./../types/quiz_types";

const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  // Answer state
  let [selectedAns, setSelectedAns] = useState("");

  // Handle Selection
  const handleSelect = (event: any) => {
    setSelectedAns(event.target.value);
  };

  return (
    <div className="question-container ">
      <div className="question">
        <h3>{question}</h3>
      </div>

      <form
        className="question-form"
        action=""
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        {options.map((option, index) => {
          return (
            <div key={index}>
              <label className="options">
                <input
                  type="radio"
                  name="option"
                  required
                  checked={selectedAns === option}
                  value={option}
                  onChange={handleSelect}
                />
                {option}
              </label>
            </div>
          );
        })}
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default QuestionCard;
