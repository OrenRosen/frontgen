import React, { useEffect, useRef } from "react";
import AnswerItem from "./answerItem";
import { globals } from "../App";
import { useParams } from "react-router-dom";

export function QuestionaireList2() {
  console.log("____________________ Rendered QuestionaireList2");
  const questions = globals.questions;
  const params = useParams();

  const lalaRef = useRef("");

  let questionId = params.questionId;
  if (questionId === undefined) {
    questionId = "0";
  }

  useEffect(() => {
    console.log("using effect");
  });

  const currentQuestionIndex = parseInt(questionId);
  const question = questions[currentQuestionIndex];
  const allAnswers = question.allAnswers;
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
        onSelectAnswer={globals.handleClickAnswer}
      />
    );
  });

  return <div className="QuestionaireList">{<div>{rows}</div>}</div>;
}

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

export default QuestionaireList2;
