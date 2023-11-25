import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import announceRouter from "./routes/announce_route.js";
import quizRouter from "./routes/quiz_route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 8000;
mongoose
	.connect(process.env.MONGO_DB_SECRET)
	.then(() => console.log("MongoDB conected"))
	.catch((err) => {
		console.log("MongoDB error: " + err);
	});
app.use(
	cors({
		origin: ["http://localhost:3000"],
	})
);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
app.use("/api/announce", announceRouter);
app.use("/api/quiz", quizRouter);
app.listen(port, () => console.log(`server is running on port ${port}`));
