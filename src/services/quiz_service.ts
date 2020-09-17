import { QuestionType, Quiz } from "./../types/quiz_types";

// Get Data from API
export const getQuizDetails = async (
  totalQuestions: number,
  level: string
): Promise<Quiz[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );
  const { results } = await response.json();
  const quiz = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      options: questionObj.incorrect_answers.concat(questionObj.correct_answer),
    };
  });
  return quiz;
};
