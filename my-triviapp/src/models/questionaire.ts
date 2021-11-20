interface Question {
  question: string;
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  selectedAnswer: string;
  wasAnswered: boolean;
  answersOrder?: Array<string>;
}

export default Question;
