import React from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionaireList from "./components/QuestinaireList";
import Question from "./models/questionaire";
import Results from "./components/results";

interface IState {
  initialQuestion: Array<Question>;
  questions: Array<Question>;
  currentQuestionIndex: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    const questions: Array<Question> = [
      {
        question: "What year was the very first model of the iPhone released?",
        answers: ["2008", "2007", "2000", "100 BC"],
        correctAnswerIndex: 1,
        selectedAnswer: -1,
        wasAnswered: false,
      },
      // {
      //   question:
      //     "What’s the shortcut for the “copy” function on most computers?",
      //   answers: ["ctrl c", "copy+9", "ctrl alt delete", "shift 6"],
      //   correctAnswerIndex: 0,
      //   selectedAnswer: -1,
      //   wasAnswered: false,
      // },
      // {
      //   question: "Is Java a type of OS?",
      //   answers: [
      //     "Sure",
      //     "Yes, if OS stands for Oh Shit",
      //     "Nope",
      //     "Jave What?",
      //   ],
      //   correctAnswerIndex: 2,
      //   selectedAnswer: -1,
      //   wasAnswered: false,
      // },
    ];

    this.state = {
      initialQuestion: questions.slice(),
      questions: questions,
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
    setTimeout(() => {
      this.setState((prevState: IState) => {
        return {
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        };
      });
    }, 900);

    this.setState((prevState: IState) => {
      const questions = prevState.questions.slice();
      const question = questions[prevState.currentQuestionIndex];
      question.wasAnswered = true;
      return {
        questions: questions,
      };
    });
  };

  handleTryAgain = () => {
    this.setState((prevState: IState) => {
      let questions = prevState.questions.map((question) => {
        question.selectedAnswer = -1;
        question.wasAnswered = false;
        return question;
      });

      return {
        questions: questions,
        currentQuestionIndex: 0,
      };
    });
  };

  render() {
    console.log("----- renders App");

    const didFinsihed =
      this.state.currentQuestionIndex == this.state.questions.length;
    return didFinsihed ? (
      <div className="App">
        <Results
          questions={this.state.questions}
          onTryAgainClick={this.handleTryAgain}
        />
      </div>
    ) : (
      <div className="App">
        <Header />
        <QuestionaireList
          questions={this.state.questions}
          currentQuestionIndex={this.state.currentQuestionIndex}
          onSelect={this.handleSelectAnswer}
          onClickAnswer={this.handleClickAnswer}
        />
      </div>
    );

    // return (
    // <div className="App">
    //   <Header />
    //   <QuestionaireList
    //     questions={this.state.questions}
    //     currentQuestionIndex={this.state.currentQuestionIndex}
    //     onSelect={this.handleSelectAnswer}
    //     onClickAnswer={this.handleClickAnswer}
    //   />
    // </div>
    // );
  }
}

export default App;
