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
      alert(`Your score is : ${score} out of ${quiz.length}`);
      setStep(0);
      setScore(0);
    }
  };

  if (!quiz.length) {
    return <h3>Loading....</h3>;
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
