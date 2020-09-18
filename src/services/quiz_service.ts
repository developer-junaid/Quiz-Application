import { Quiz } from "./../types/quiz_types";

// Shuffle Answers functions
const shuffleAnswers = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

// Get Data from API
export const getQuizDetails = async (
  totalQuestions: number,
  level: string
): Promise<Quiz[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );
  let { results } = await response.json();
  const quiz = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      options: shuffleAnswers(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quiz;
};
