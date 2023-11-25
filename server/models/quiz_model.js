import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
	{
		question: {
			type: String,
			required: true,
			unique: true,
		},
		answer_1: {
			type: String,
			required: true,
			unique: false,
		},
		answer_2: {
			type: String,
			required: true,
			unique: false,
		},
		answer_3: {
			type: String,
			required: true,
			unique: false,
		},
		answer_4: {
			type: String,
			required: true,
			unique: false,
		},
	},
	{ timestamps: true }
);
const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
