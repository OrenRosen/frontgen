import React from "react";
import Question from "../models/questionaire";

interface IProps {
  questions: Array<Question>;
  currentQuestionIndex: number;
}

const QuestionaireHeader: React.FC<IProps> = ({
  questions,
  currentQuestionIndex,
}) => {
  console.log("********** RENDERS QuestionaireHeader");

  const question = questions[currentQuestionIndex];
  const numberOfQuestions = questions.length;
  const numberOfCorrects = questions.reduce((total, question) => {
    return question.correctAnswer === question.selectedAnswer
      ? total + 1
      : total;
  }, 0);
  return (
    <div>
      <label className="quesionsCount">{`Quesiton number ${currentQuestionIndex} from ${numberOfQuestions}`}</label>
      <label className="correctCount">{`Answered Correctly: ${numberOfCorrects}/${currentQuestionIndex}`}</label>
      <h3 className="question">{question.question}</h3>
    </div>
  );
};

export default QuestionaireHeader;
