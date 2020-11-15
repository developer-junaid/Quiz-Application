import React from "react";

export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionType = {
  question: string;
  answer: string;
  options: string[];
};

export type questionPropsType = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<EventTarget>, ans: string) => void;
  totalQuestions: number;
  currentQuestion: number;
};

export type resultPropsType = {
  category: number, 
  level: string,
  total: number,
  score: number
}

export type inputPropsType = {
  questions: number;
  category: number;
  setCategory: (category: number) => void;
  setQuestions: (questions: number) => void;
  level: string;
  setLevel: (level: string) => void;
  callback: (
    e: React.FormEvent<EventTarget>,
    questions: number,
    level: string
  ) => void;
};
