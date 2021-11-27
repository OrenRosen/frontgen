import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Question from "./models/questionaire";
import Results from "./components/results";
import Fetcher from "./fetcher";
import Spinner from "./components/Spinner";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

interface IGlobals {
  questions: Array<Question>;
  handleClickAnswer: (answer: string) => void;
}

export const globals: IGlobals = {
  questions: [],
  handleClickAnswer: (answer: string) => {},
};

function App(props = {}) {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  console.log("-------------->>>", questionIndex);
  globals.questions = questions;
  globals.handleClickAnswer = handleClickAnswer;

  useEffect(() => {
    const fetcher = new Fetcher();
    fetcher.fetchFromFile(handleData);
  }, []);

  function handleClickAnswer(answer: string) {
    const question = questions[questionIndex];
    if (question.wasAnswered) {
      return;
    }

    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      navigate(`${questionIndex + 1}`);
    }, 600);

    question.wasAnswered = true;
    question.selectedAnswer = answer;
    setQuestions(questions.slice());
  }

  function handleData(questions: Array<Question>) {
    setQuestions(questions);
    setQuestionIndex(0);
  }

  function handleTryAgain() {
    let clearQuestions = questions.map((question) => {
      question.selectedAnswer = "";
      question.wasAnswered = false;
      question.allAnswers = [];
      navigate("");
      return question;
    });

    setQuestions(clearQuestions);
    setQuestionIndex(0);
  }

  if (questions.length === 0) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  const didFinsihed = questionIndex === questions.length;
  if (didFinsihed) {
    return (
      <div className="App">
        <Results questions={questions} onTryAgainClick={handleTryAgain} />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
