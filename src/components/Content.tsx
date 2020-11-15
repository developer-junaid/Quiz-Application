import React, { useState, useEffect } from "react"
import "./../styles/css/content.css"
import Input from "./Input"
import Questions from "./Questions"
import Result from "./Result"
import Loader from "./Loader"
import { QuestionType } from "./../types/quiz_types"
import { getQuizDetails } from "./../services/quiz_service"

const Content = () => {
  // Quiz State
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [step, setStep] = useState(0)
  let [score, setScore] = useState(0)
  let [questions, setQuestions] = useState(5)
  let [level, setLevel] = useState("easy")
  let [category, setCategory] = useState(9)
  let [showResult, setShowResult] = useState(false)
  let [inputSubmitted, setInputSubmitted] = useState(false)
  let [name, setName] = useState("")

  useEffect(() => {
    async function fetchData() {
      const totalQuestions: QuestionType[] = await getQuizDetails(
        questions,
        category,
        level
      )
      setQuiz(totalQuestions)
    }
    fetchData()
  }, [questions, category, level])

  // Create handleSubmit function
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault()

    const currentQuestion: QuestionType = quiz[step]

    if (userAns === currentQuestion.answer) {
      setScore(++score)
    }

    if (step !== quiz.length - 1) {
      setStep(++step)
    } else {
      setShowResult(true)
    }
  }

  // Create handleInputSubmit function
  const handleInputSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    setInputSubmitted(true)
  }

  // Loading
  if (!quiz.length) {
    return (
      <div className="content-container">
        <Loader />
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="content-container">
        <Result
          name={name}
          score={score}
          total={quiz.length}
          level={level}
          category={category}
        />
      </div>
    )
  }

  return (
    <div className="content-container">
      {inputSubmitted ? (
        <Questions
          options={quiz[step].options}
          question={quiz[step].question}
          callback={handleSubmit}
          totalQuestions={quiz.length}
          currentQuestion={step}
        />
      ) : (
        <Input
          setName={setName}
          name={name}
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
  )
}

export default Content
