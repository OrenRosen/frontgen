import jsonquestions from "./questions.json";
import Question from "./models/questionaire";

interface externalQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

interface response {
  results: Array<externalQuestion>;
}

class Fetcher {
  fetchFromFile(fn: (data: Array<Question>) => void) {
    const questions: Array<Question> = jsonquestions.map((jsonQ) => {
      return {
        question: jsonQ.question,
        correctAnswer: jsonQ.correctAnswer,
        incorrectAnswers: jsonQ.incorrectAnswers,
        selectedAnswer: "",
        wasAnswered: false,
      };
    });
    fn(questions);
  }

  fetchFromURL(fn: (data: Array<Question>) => void) {
    const url = "https://opentdb.com/api.php?amount=2&difficulty=easy";
    fetch(url)
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((jsonresponse: response) => {
        const questions: Array<Question> = jsonresponse.results.map(
          (jsonQ: externalQuestion) => {
            return {
              question: jsonQ.question,
              correctAnswer: jsonQ.correct_answer,
              incorrectAnswers: jsonQ.incorrect_answers,
              selectedAnswer: "",
              wasAnswered: false,
            };
          }
        );
        fn(questions);
      });
  }
}

export default Fetcher;
