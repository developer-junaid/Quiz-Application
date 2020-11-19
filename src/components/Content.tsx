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
  let [step, setStep] = useState<number>(0)
  let [score, setScore] = useState<number>(0)
  let [questions, setQuestions] = useState<number>(5)
  let [level, setLevel] = useState<string>("easy")
  let [category, setCategory] = useState<number>(9)
  let [showResult, setShowResult] = useState<Boolean>(false)
  let [name, setName] = useState<string>("")
  let [gettingData, setGettingData] = useState<Boolean>(false)

  //to stop sening initial request to api
  const [sendRequest, setSendRequest] = useState<Boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      // const dummyResponse = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      if (sendRequest) {
        console.log("getting data ...")
        setGettingData(true)

        const totalQuestions: QuestionType[] = await getQuizDetails(
          questions,
          category,
          level
        )

        console.log("got data !!")
        setGettingData(false)
        setQuiz(totalQuestions)
      }
    }

    fetchData()
  }, [sendRequest, questions, category, level])
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

  // Loading
  if (gettingData) {
    return (
      <div className="content-container">
        <Loader />
      </div>
    )
  }

  //  RETURN
  return (
    <div className="content-container">
      {quiz.length ? (
        !showResult ? (
          <Questions
            options={quiz[step].options}
            question={quiz[step].question}
            callback={handleSubmit}
            totalQuestions={quiz.length}
            currentQuestion={step}
          />
        ) : (
          <Result
            // Data
            name={name}
            score={score}
            total={quiz.length}
            level={level}
            category={category}
            // Functions
            setName={setName}
            setScore={setScore}
            setQuestions={setQuestions}
            setCategory={setCategory}
            setLevel={setLevel}
            setStep={setStep}
            setQuiz={setQuiz}
            setSendRequest={setSendRequest}
            setShowResult={setShowResult}
          />
        )
      ) : (
        <Input
          setName={setName}
          setSendRequest={setSendRequest}
          name={name}
          questions={questions}
          setQuestions={setQuestions}
          level={level}
          category={category}
          setCategory={setCategory}
          setLevel={setLevel}
        />
      )}
    </div>
  )
}

export default Content
