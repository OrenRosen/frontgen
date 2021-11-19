import React from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionaireList from "./components/QuestinaireList";
import Question from "./models/questionaire";

interface IState {
  questions: Array<Question>;
  currentQuestionIndex: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      questions: [
        {
          question:
            "What year was the very first model of the iPhone released?",
          answers: ["2008", "2007", "2000", "100 BC"],
          correctAnswerIndex: 1,
          selectedAnswer: -1,
        },
        {
          question:
            "What’s the shortcut for the “copy” function on most computers?",
          answers: ["ctrl c", "copy+9", "ctrl alt delete", "shift 6"],
          correctAnswerIndex: 0,
          selectedAnswer: -1,
        },
        {
          question: "Is Java a type of OS?",
          answers: [
            "Sure",
            "Yes, if OS stands for Oh Shit",
            "Nope",
            "Jave What?",
          ],
          correctAnswerIndex: 2,
          selectedAnswer: -1,
        },
      ],
      currentQuestionIndex: 0,
    };
  }

  handleSelectAnswer = (index: number) => {
    this.setState((prevState: IState) => {
      const questions = prevState.questions.slice();
      const question = questions[prevState.currentQuestionIndex];
      question.selectedAnswer = index;
      return {
        questions: questions,
      };
    });
  };

  handleClickAnswer = () => {
    console.log("-------- handleClickAnswer");
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  };

  render() {
    const currentQuestion =
      this.state.questions[this.state.currentQuestionIndex];

    return (
      <div>
        <Header />
        <QuestionaireList
          question={currentQuestion}
          onSelect={this.handleSelectAnswer}
          onClickAnswer={this.handleClickAnswer}
        />
      </div>
    );
  }
}

export default App;
