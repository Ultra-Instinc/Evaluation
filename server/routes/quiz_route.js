import express from "express";
import {
	createQuiz,
	getAllQuizzes,
	updateQuiz,
	deleteQuiz,
	getSingleQuiz,
} from "../controllers/quiz_controller.js";

const router = express.Router();

router.post("/create", createQuiz);
router.get("/get", getAllQuizzes);
router.get("/get/:id", getSingleQuiz);
router.put("/update/:id", updateQuiz);
router.delete("/delete/:id", deleteQuiz);

export default router;
