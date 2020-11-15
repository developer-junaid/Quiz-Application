import React from "react"
import "./../styles/css/result.css"
import { resultPropsType } from "./../types/quiz_types"

const Result: React.FC<resultPropsType> = ({
  score,
  name, 
  total,
  category,
  level,
}) => {
  // Handle Try again
  const handleTryAgain = () => {
    window.location.reload()
  }

  let categoryString = ""

  if (category === 9) {
    categoryString = "General Knowledge"
  } else if (category === 17) {
    categoryString = "Science"
  } else if (category === 18) {
    categoryString = "Computers"
  } else if (category === 19) {
    categoryString = "Mathematics"
  } else if (category === 21) {
    categoryString = "Sports"
  }

  return (
    <div className="result-container">
      <div className="heading">
        {" "}
        <h1>Your Result</h1>
      </div>
      <div className="results">
        <h3>
          {" "}
          Name <span>{name} </span>
        </h3>
        <h3>
          {" "}
          Total Questions <span>{total}</span>
        </h3>
        <h3>
          {" "}
          Score <span>{score}</span>
        </h3>
        <h3>
          {" "}
          Percentage <span>{(score / total) * 100}%</span>
        </h3>
        <h3>
          {" "}
          Difficulty Level <span>{level}</span>
        </h3>
        <h3>
          {" "}
          Category <span>{categoryString}</span>
        </h3>
      </div>
      <div className="button">
        <input
          type="button"
          onClick={handleTryAgain}
          className="submit-btn"
          value="Try Again"
        />
      </div>
    </div>
  )
}

export default Result
