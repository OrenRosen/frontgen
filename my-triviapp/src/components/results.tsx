import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetAnswers } from "../store/questionSlice";

function Results() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.questions.questions);
  const numberOfQuestions = questions.length;
  const numberOfCorrects = questions.reduce((total, question) => {
    return question.correctAnswer === question.selectedAnswer
      ? total + 1
      : total;
  }, 0);

  function handleAgainClick() {
    dispatch(resetAnswers());
    navigate("/");
  }

  return (
    <div className="Results">
      <div>{`Answered Correctly ${numberOfCorrects}/${numberOfQuestions}`}</div>
      <button onClick={handleAgainClick}>Start Over</button>
    </div>
  );
}

export default Results;
