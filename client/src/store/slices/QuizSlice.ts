import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface QuizState {
	_id?: string;
	question: string;
	answer_1: string;
	answer_2: string;
	answer_3: string;
	answer_4: string;
}

// Define the initial state using that type
const initialState: { quiz: QuizState[] } = {
	quiz: [],
};

export const quizSlice = createSlice({
	name: "quiz",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		populateQuiz: (state, action) => {
			if (state.quiz.length > 0) {
				state.quiz = new Array();
			}
			state.quiz.push(...action.payload);
		},
		handleQuizDeletion: (state, action) => {
			state.quiz = state.quiz.filter((q) => q._id !== action.payload);
		},
	},
});

export const { populateQuiz, handleQuizDeletion } = quizSlice.actions;

export default quizSlice.reducer;
