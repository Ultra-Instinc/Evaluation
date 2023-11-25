import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { handleQuizDeletion, populateQuiz } from "../store/slices/QuizSlice";
import { toggleQuizModal } from "../store/slices/userSlice";
import { useAppSelector } from "../store/hooks";
const QuizModal = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const modal = useAppSelector((state) => state.user.modal);
	const quizData = useAppSelector((state) => state.quiz.quiz);
	useEffect(() => {
		const fetchQuizData = async () => {
			const res = await window.fetch(`http://localhost:5555/api/quiz/get`);

			const data = await res.json();
			dispatch(populateQuiz(data));
		};
		fetchQuizData();
	}, []);
	const handleDeleteIconClick = async (id: any) => {
		await window.fetch(`http://localhost:5555/api/quiz/delete/${id}`, {
			method: "DELETE",
		});
		dispatch(handleQuizDeletion(id));
	};
	return (
		<div
			className={` ${
				modal ? "" : "hidden"
			} fixed  h-[6000px]  top-0 left-0 w-full bg-gray-300 z-10`}>
			<div className='relative h-full w-full flex'>
				<div
					onClick={() => dispatch(toggleQuizModal())}
					className='absolute top-2 right-2 md:right-[15%] w-8 h-8 bg-red-300 hover:cursor-pointer hover:bg-red-500 items-center text-xl justify-center flex'>
					x
				</div>
				<div
					onClick={() => navigate("/dashboard/create-quiz")}
					className='absolute top-14 right-2 md:right-[15%] px-2 py-1 bg-cyan-300 hover:cursor-pointer hover:bg-cyan-500 items-center text-xl justify-center flex'>
					Add
				</div>
				<div className='bg-white rounded-lg h-[900px] flex flex-col gap-2 w-[80vw] md:w-[60vw]  mx-auto p-0 md:p-4 overflow-auto'>
					<div className='flex-[0.8]'>
						{quizData.map((quiz) => (
							<div
								key={quiz._id}
								className='bg-gray-200 py-1 my-4 px-1  relative'>
								<div
									onClick={() => handleDeleteIconClick(quiz._id)}
									className='absolute top-1 right-2 text-red-500 cursor-pointer '>
									{" "}
									<DeleteIcon />
								</div>
								<div
									onClick={() => navigate(`/dashboard/quiz/${quiz._id}`)}
									className='absolute bottom-1 right-2 text-blue-500 cursor-pointer'>
									{" "}
									<ModeEditIcon />{" "}
								</div>
								<div className='text-xl pb-4'>{quiz.question}</div>
								<div className='flex '>
									<div className='flex md:flex-row flex-col gap-2'>
										<div className='flex px-2'>
											<input
												type='radio'
												name={quiz.question}
												id=''
											/>
											<label>{quiz.answer_1}</label>
										</div>
										<div className='flex px-2'>
											<input
												type='radio'
												name={quiz.question}
												id=''
											/>
											<label>{quiz.answer_2}</label>
										</div>
										<div className='flex px-2'>
											<input
												type='radio'
												name={quiz.question}
												id=''
											/>
											<label>{quiz.answer_3}</label>
										</div>
										<div className='flex px-2'>
											<input
												type='radio'
												name={quiz.question}
												id=''
											/>
											<label>{quiz.answer_4}</label>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizModal;
