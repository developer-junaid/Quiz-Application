import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType } from "./types/quiz_types";
import QuestionCard from "./components/QuestionCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputCard from "./components/InputCard";
import Footer from "./components/Footer";

function App() {
  // Quiz State
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [step, setStep] = useState(0);
  let [score, setScore] = useState(0);
  let [questions, setQuestions] = useState(5);
  let [level, setLevel] = useState("easy");
  let [category, setCategory] = useState(9);
  let [showResult, setShowResult] = useState(false);
  let [inputSubmitted, setInputSubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const totalQuestions: QuestionType[] = await getQuizDetails(
        questions,
        category,
        level
      );
      setQuiz(totalQuestions);
    }
    fetchData();
  }, [questions, category, level]);

  // Create handleSubmit function
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuestionType = quiz[step];

    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }

    if (step !== quiz.length - 1) {
      setStep(++step);
    } else {
      setShowResult(true);
    }
  };

  // Create handleInputSubmit function
  const handleInputSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setInputSubmitted(true);
  };

  // Handle Try again
  const handleTryAgain = () => {
    window.location.reload();
  };

  // Loading
  if (!quiz.length) {
    return (
      <div className="spinner-container">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="App">
        <h1 className="main-heading">Online Quiz Application</h1>

        <div className="question-container result-container">
          <div>
            <h2>Result</h2>
          </div>
          <p className="result-text">
            {" "}
            Your score is : <b>{score}</b> out of <b>{quiz.length}</b>
            <br />
            Percentage : <b>{(score / quiz.length) * 100}%</b>
          </p>
          <input
            type="button"
            onClick={handleTryAgain}
            className="submit-btn"
            value="Try Again"
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="main-heading">Online Quiz Application</h1>
      <hr />

      <div className="content">
        {inputSubmitted ? (
          <QuestionCard
            options={quiz[step].options}
            question={quiz[step].question}
            callback={handleSubmit}
            totalQuestions={quiz.length}
            currentQuestion={step}
          />
        ) : (
          <InputCard
            questions={questions}
            setQuestions={setQuestions}
            level={level}
            category={category}
            setCategory={setCategory}
            setLevel={setLevel}
            callback={handleInputSubmit}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
