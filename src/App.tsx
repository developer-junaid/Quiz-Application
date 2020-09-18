import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType } from "./types/quiz_types";
import QuestionCard from "./components/QuestionCard";

function App() {
  // Quiz State
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [step, setStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShoeResult] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, "easy");
      setQuiz(questions);
    }

    fetchData();
  }, []);

  // Create handleSubmit function
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuestionType = quiz[step];

    console.log(userAns, currentQuestion.answer);
    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }

    if (step !== quiz.length - 1) {
      setStep(++step);
    } else {
      setShoeResult(true);
    }
  };

  if (!quiz.length) {
    return (
      <div className="spinner-container">
        <h2>Loading ...</h2>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="question-container result-container">
        <div>
          <h2>Result</h2>
        </div>
        <p className="result-text">
          {" "}
          Your score is : <b>{score}</b> out of <b>{quiz.length}</b>
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="main-heading">Quiz Application</h1>
      <QuestionCard
        options={quiz[step].options}
        question={quiz[step].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
