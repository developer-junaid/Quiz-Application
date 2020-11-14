import React from "react"
import "./../styles/css/result.css"

const Result = () => {
  return (
    <div className="result-container">
      <div className="heading">
        <h1>Your Result</h1>
      </div>
      <div className="results">
        <h3>Name <span>Junaid</span></h3>
        <h3>Total Questions <span>10</span></h3>
        <h3>Score  <span>5</span></h3>
        <h3>Percentage  <span>85%</span></h3>
        <h3>Difficulty Level  <span>Easy</span></h3>
        <h3>Category  <span>Science</span></h3>
      </div>
      <div className="button">
        <input
          type="button"
          // onClick={handleTryAgain}
          className="submit-btn"
          value="Try Again"
        />
      </div>
    </div>
  )
}

export default Result
