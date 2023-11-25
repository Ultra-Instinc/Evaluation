import Quiz from "../models/quiz_model.js";
import { errorHandler } from "../utils/error.js";

export const createQuiz = async (req, res, next) => {
	try {
		const { question, answer_1, answer_2, answer_3, answer_4 } = req.body;
		// handle the case if the user didn't send all required data
		if (!question || !answer_1 || !answer_2 || !answer_3 || !answer_4) {
			return next(
				errorHandler(
					400,
					"The quiz must contain 5 key:value pairs >>> question:string, answer_1:string, answer_2:string, answer_3:string, answer_4:string"
				)
			);
		}
		// a simple check to see if the quiz's question already exists in the DB
		// because we have a rule on our quiz Db model to have a unique question
		const quiz = await Quiz.findOne({ question });
		if (quiz) {
			return next(
				errorHandler(
					400,
					"This quiz question already exists in the database, please enter unique question"
				)
			);
		}
		const validQuiz = await Quiz.create({
			question,
			answer_1,
			answer_2,
			answer_3,
			answer_4,
		});
		return res.status(201).json(validQuiz);
	} catch (error) {
		next(error);
	}
};
export const getAllQuizzes = async (req, res, next) => {
	try {
		const quizess = await Quiz.find();
		if (!quizess) {
			return next(errorHandler(404, "No quizzes"));
		}
		res.status(200).json(quizess);
	} catch (error) {}
};
export const updateQuiz = async (req, res, next) => {
	try {
		// simple check to see if the requested quiz exists or nor
		const quiz = await Quiz.findById(req.params.id);
		if (!quiz) {
			return next(errorHandler(404, "quiz not found"));
		}
		// a check to see if the updated quiz's new question already
		// exist in another question
		const incomingQuestion = req.body.question;
		const aQuiz = await Quiz.findOne({ question: incomingQuestion });
		if (aQuiz) {
			return next(
				errorHandler(
					403,
					"Cant do that :: the question that you are trying to update to already exists"
				)
			);
		}

		const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		res.status(202).json(updatedQuiz);
	} catch (error) {
		next(error);
	}
};
export const deleteQuiz = async (req, res, next) => {
	try {
		const quiz = await Quiz.findById(req.params.id);
		if (!quiz) {
			next(errorHandler(404, "quiz not found"));
		}
		await Quiz.findByIdAndDelete(req.params.id);
		res.status(200).json("the quiz has been deleted");
	} catch (error) {
		next(error);
	}
};
export const getSingleQuiz = async (req, res, next) => {
	try {
		const quiz = await Quiz.findById(req.params.id);
		if (!quiz) {
			return next(errorHandler(404, "quiz not found"));
		}
		res.status(200).json(quiz);
	} catch (error) {
		next(error);
	}
};
