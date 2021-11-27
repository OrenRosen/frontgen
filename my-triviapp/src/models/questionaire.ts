interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  selectedAnswer: string;
  allAnswers: Array<string>;
}

export default Question;
