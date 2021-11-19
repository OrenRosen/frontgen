interface Question {
  question: string;
  answers: Array<string>;
  correctAnswerIndex: number;
  selectedAnswer: number;
  wasAnswered: boolean;
}

export default Question;
