import React, { SyntheticEvent } from "react";
import Question from "../models/questionaire";
import AnswerItem from "./answerItem";
import QuestionaHeader from "./questionaireHeader";

interface IProps {
  questions: Array<Question>;
  currentQuestionIndex: number;
  onSelect: Function;
}
const QuestionaireList: React.FC<IProps> = ({
  questions,
  currentQuestionIndex,
  onSelect,
}) => {
  const question = questions[currentQuestionIndex];

  const handleClickAnswer = (answer: string) => {
    console.log(answer);
    const alreadyChecked = question.selectedAnswer === answer;
    if (alreadyChecked) {
      return;
    }

    onSelect(answer);
  };

  let allAnswers;
  if (question.answersOrder) {
    allAnswers = question.answersOrder;
  } else {
    allAnswers = question.incorrectAnswers.concat(question.correctAnswer);
    allAnswers = shuffle(allAnswers);
    question.answersOrder = allAnswers;
  }

  let rows = allAnswers.map((answer) => {
    const checked = question.selectedAnswer === answer;
    let cname = "idle";
    const isCorrect = answer === question.correctAnswer;
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
        onSelectAnswer={handleClickAnswer}
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
    </div>
  );
};

function shuffle<T>(array: Array<T>): Array<T> {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default QuestionaireList;
