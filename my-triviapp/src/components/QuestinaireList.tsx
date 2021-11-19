import React, { SyntheticEvent } from "react";
import Question from "../models/questionaire";
import AnswerItem from "./answerItem";

interface IProps {
  question: Question;
  onSelect: Function;
  onClickAnswer: () => void;
}

const QuestionaireList: React.FC<IProps> = ({
  question,
  onSelect,
  onClickAnswer,
}) => {
  console.log("QuestionaireList rendered");

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
    return (
      <AnswerItem
        key={answer}
        answer={answer}
        checked={checked}
        onChange={makeChangeHandler(index)}
      />
    );
  });

  return (
    <div>
      <h3>{question.question}</h3>
      {rows}
      <button onClick={onClickAnswer}>Answer</button>
    </div>
  );
};

export default QuestionaireList;
