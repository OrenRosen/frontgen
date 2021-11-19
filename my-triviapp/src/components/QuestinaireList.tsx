import React, { SyntheticEvent } from "react";
import Question from "../models/questionaire";
import AnswerItem from "./answerItem";
import QuestionaHeader from "./questionaireHeader";

interface IProps {
  questions: Array<Question>;
  currentQuestionIndex: number;
  onSelect: Function;
  onClickAnswer: () => void;
}

const QuestionaireList: React.FC<IProps> = ({
  questions,
  currentQuestionIndex,
  onSelect,
  onClickAnswer,
}) => {
  console.log("QuestionaireList rendered");
  const question = questions[currentQuestionIndex];
  function makeChangeHandler(index: number) {
    return (e: SyntheticEvent) => {
      console.log("onChange");
      const alreadyChecked = question.selectedAnswer === index;
      if (alreadyChecked) {
        e.preventDefault();
        return;
      }

      onSelect(index);
    };
  }

  let rows = question.answers.map((answer, index) => {
    const checked = question.selectedAnswer === index;
    let cname = "idle";
    const isCorrect = question.correctAnswerIndex === index;
    if (question.wasAnswered && isCorrect) {
      cname = "correct";
    }
    if (question.wasAnswered && checked && !isCorrect) {
      cname = "incorrect";
    }

    return (
      <AnswerItem
        cname={cname}
        key={answer}
        answer={answer}
        checked={checked}
        onChange={makeChangeHandler(index)}
      />
    );
  });
  return (
    <div className="QuestionaireList">
      <QuestionaHeader
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <div>{rows}</div>
      <button disabled={question.selectedAnswer < 0} onClick={onClickAnswer}>
        Answer
      </button>
    </div>
  );
};

export default QuestionaireList;
