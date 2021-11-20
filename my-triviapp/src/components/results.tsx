import React from "react";
import Question from "../models/questionaire";

interface IProps {
  questions: Array<Question>;
  onTryAgainClick: () => void;
}

const Results: React.FC<IProps> = ({ questions, onTryAgainClick }) => {
  const numberOfQuestions = questions.length;
  const numberOfCorrects = questions.reduce((total, question) => {
    return question.correctAnswerIndex === question.selectedAnswer
      ? total + 1
      : total;
  }, 0);

  return (
    <div className="Results">
      <div>{`Answered Correctly ${numberOfCorrects}/${numberOfQuestions}`}</div>
      <button onClick={onTryAgainClick}>Start Over</button>
    </div>
  );
};

export default Results;
