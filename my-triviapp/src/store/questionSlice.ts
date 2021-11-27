import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Question from "../models/questionaire";

interface selectAnswerPayload {
  answer: string;
  questionIndex: number;
}

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [] as Question[],
  },
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    selectAnswer: (state, action: PayloadAction<selectAnswerPayload>) => {
      console.log("selected answer ", action.payload);

      state.questions[action.payload.questionIndex].selectedAnswer =
        action.payload.answer;
    },
    resetAnswers: (state) => {
      state.questions.forEach((question) => {
        question.selectedAnswer = "";
      });
    },
  },
});

export const { setQuestions, selectAnswer, resetAnswers } =
  questionsSlice.actions;

export default questionsSlice.reducer;
