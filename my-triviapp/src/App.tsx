import React from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionaireList from "./components/QuestinaireList";
import Question from "./models/questionaire";
import Results from "./components/results";
import Fetcher from "./fetcher";

interface IState {
  initialQuestion: Array<Question>;
  questions: Array<Question>;
  currentQuestionIndex: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      initialQuestion: [],
      questions: [],
      currentQuestionIndex: 0,
    };
  }

  componentDidMount() {
    const fetcher = new Fetcher();
    fetcher.fetchFromFile(this.handleData);
  }

  handleData = (questions: Array<Question>) => {
    console.log("********************* ", questions);
    this.setState({
      initialQuestion: questions,
      questions: questions,
      currentQuestionIndex: 0,
    });
  };

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
    console.log("----- renders App", this.state.questions);

    const didFinsihed =
      this.state.currentQuestionIndex === this.state.questions.length;
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
