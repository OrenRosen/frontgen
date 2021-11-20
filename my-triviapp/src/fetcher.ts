import jsonquestions from "./questions.json";
import Question from "./models/questionaire";

class Fetcher {
  fetchFromFile(fn: (data: Array<Question>) => void) {
    console.log("----------", jsonquestions);
    const questions: Array<Question> = jsonquestions.map((jsonQ) => {
      return {
        question: jsonQ.question,
        answers: jsonQ.answers,
        correctAnswerIndex: jsonQ.correctAnswerIndex,
        selectedAnswer: -1,
        wasAnswered: false,
      };
    });
    fn(questions);
  }
}

export default Fetcher;
