interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  selectedAnswer: string;
  wasAnswered: boolean;
  allAnswers: Array<string>;
}

export default Question;
