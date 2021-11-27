import React from "react";
import { globals } from "../App";
import { useParams } from "react-router-dom";

function Header() {
  const questions = globals.questions;
  const params = useParams();
  let questionId = params.questionId;
  if (questionId === undefined) {
    questionId = "0";
  }
  const currentQuestionIndex = parseInt(questionId, 10);
  const question = questions[currentQuestionIndex];
  const numberOfQuestions = questions.length;
  const numberOfCorrects = questions.reduce((total: any, question: any) => {
    return question.wasAnswered &&
      question.correctAnswer === question.selectedAnswer
      ? total + 1
      : total;
  }, 0);
  return (
    <>
      <h1 className="Header">Trivapp!</h1>
      <div>
        <label className="quesionsCount">{`Quesiton number ${questionId} from ${numberOfQuestions}`}</label>
        <label className="correctCount">{`Answered Correctly: ${numberOfCorrects}/${currentQuestionIndex}`}</label>
        <h3 className="question">{question.question}</h3>
      </div>
    </>
  );
}

export default Header;

// const QuestionaireHeader: React.FC<IProps> = ({
//   questions,
//   currentQuestionIndex,
// }) => {
//   const question = questions[currentQuestionIndex];
//   const numberOfQuestions = questions.length;
//   const numberOfCorrects = questions.reduce((total, question) => {
//     return question.wasAnswered &&
//       question.correctAnswer === question.selectedAnswer
//       ? total + 1
//       : total;
//   }, 0);
//   return (
//     <div>
//       <label className="quesionsCount">{`Quesiton number ${currentQuestionIndex} from ${numberOfQuestions}`}</label>
//       <label className="correctCount">{`Answered Correctly: ${numberOfCorrects}/${currentQuestionIndex}`}</label>
//       <h3 className="question">{question.question}</h3>
//     </div>
//   );
// };
