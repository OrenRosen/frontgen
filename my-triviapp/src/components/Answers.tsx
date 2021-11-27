import { useAppDispatch, useAppSelector } from "../store/hooks";
import AnswerItem from "./answerItem";
import { selectAnswer } from "../store/questionSlice";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function Answers() {
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.questions.questions);
  const params = useParams();
  const questionIdString =
    params.questionId === undefined ? "0" : params.questionId;
  const questionIndex = parseInt(questionIdString, 10);

  console.log("------------ RENDER AMSWERS", questions);

  const dispatch = useAppDispatch();

  const question = questions[questionIndex];
  const allAnswers = question.allAnswers;
  let rows = allAnswers.map((answer) => {
    let cname = "idle";
    if (question.selectedAnswer !== "") {
      if (answer === question.correctAnswer) {
        cname = "correct";
      } else if (question.selectedAnswer === answer) {
        cname = "incorrect";
      }
    }

    function handleClickAnswer(e: any) {
      const payload = {
        answer: e.target.innerText,
        questionIndex: questionIndex,
      };
      dispatch(selectAnswer(payload));
      const next =
        questionIndex + 1 >= questions.length
          ? "/results"
          : `/${questionIndex + 1}`;
      console.log("--------->> >> > > ", questionIndex, questions.length, next);
      setTimeout(() => {
        navigate(next);
      }, 600);
    }

    return (
      <AnswerItem
        cname={cname}
        key={answer}
        answer={answer}
        onSelectAnswer={handleClickAnswer}
      />
    );
  });

  return <div className="QuestionaireList">{<div>{rows}</div>}</div>;
}
