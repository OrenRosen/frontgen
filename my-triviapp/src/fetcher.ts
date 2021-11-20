import jsonquestions from "./questions.json";
import Question from "./models/questionaire";

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
}

export default Fetcher;
