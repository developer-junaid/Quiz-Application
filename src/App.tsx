import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType } from "./types/quiz_types";
import QuestionCard from "./components/QuestionCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputCard from "./components/InputCard";
import { InputProvider } from "./context/InputContext";
import { InputContext } from "./context/InputContext";

function App() {
  // Quiz State
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [step, setStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShoeResult] = useState(false);
  let [questions, setQuestions] = useState(5);
  let [level, setLevel] = useState("easy");
  let [category, setCategory] = useState(9);

  // Use context
  let [inputSubmitted, setInputSubmitted] = useContext(InputContext);

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
      setShoeResult(true);
    }
  };

  // Create handleInputSubmit function
  const handleInputSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setInputSubmitted(true);
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
    <InputProvider>
      <div className="App">
        <h1 className="main-heading">Online Quiz Application</h1>
        {inputSubmitted ? (
          <QuestionCard
            options={quiz[step].options}
            question={quiz[step].question}
            callback={handleSubmit}
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
    </InputProvider>
  );
}

export default App;
