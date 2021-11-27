import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setQuestions } from "../store/questionSlice";

import QuestionaHeader from "../components/questionaireHeader";
import Answers from "./Answers";
import Fetcher from "../fetcher";
import { useNavigate, useParams } from "react-router";

export default function Questionaire() {
  console.log("-------------->>> Renderes Questionaire");
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.questions.questions);
  const params = useParams();
  const questionIdString =
    params.questionId === undefined ? "0" : params.questionId;
  const questionIndex = parseInt(questionIdString, 10);
  const navigate = useNavigate();

  if (questions.length === 0) {
    const fetcher = new Fetcher();
    fetcher.fetchFromFile((questions) => {
      dispatch(setQuestions(questions));
    });
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>TriviApp!</h1>
      <QuestionaHeader
        questions={questions}
        currentQuestionIndex={questionIndex}
      />
      <Answers />
    </div>
  );
}
