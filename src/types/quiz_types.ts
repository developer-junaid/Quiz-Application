import React from "react"

export type Quiz = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type QuestionType = {
  question: string
  answer: string
  options: string[]
}

export type questionPropsType = {
  question: string
  options: string[]
  callback: (e: React.FormEvent<EventTarget>, ans: string) => void
  totalQuestions: number
  currentQuestion: number
}

export type resultPropsType = {
  category: number
  level: string
  total: number
  name: string
  score: number

  setCategory: React.Dispatch<React.SetStateAction<number>>
  setStep: React.Dispatch<React.SetStateAction<number>>
  setScore: React.Dispatch<React.SetStateAction<number>>
  setQuestions: React.Dispatch<React.SetStateAction<number>>
  setLevel: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>
 
  setShowResult: React.Dispatch<React.SetStateAction<Boolean>>
  setQuiz: React.Dispatch<React.SetStateAction<QuestionType[]>>
  setSendRequest: React.Dispatch<React.SetStateAction<Boolean>>
}

export type inputPropsType = {
  questions: number
  category: number
  setCategory: (category: number) => void
  setQuestions: (questions: number) => void
  level: string
  name: string
  setSendRequest: React.Dispatch<React.SetStateAction<Boolean>>

  setName: (name: string) => void
  setLevel: (level: string) => void
}
