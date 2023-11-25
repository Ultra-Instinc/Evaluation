import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const QuizEditForm = () => {
	const params = useParams();
	const quizId = params.id;
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		question: "",
		answer_1: "",
		answer_2: "",
		answer_3: "",
		answer_4: "",
	});

	useEffect(() => {
		const fetchAnnounceSingleData = async () => {
			const res = await window.fetch(
				`http://localhost:5555/api/quiz/get/${quizId}`
			);
			const data = await res.json();

			const { question, answer_1, answer_2, answer_3, answer_4 } = data;
			setFormData({
				question,
				answer_1,
				answer_2,
				answer_3,
				answer_4,
			});
		};
		fetchAnnounceSingleData();
	}, []);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await window.fetch(`http://localhost:5555/api/quiz/update/${quizId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		// navigate("/dashboard");
	};
	return (
		<div className='absolute bg-white z-30 w-[100vw] h-full '>
			<form
				className='flex flex-col m-4 w-[80vw] md:w-[50vw] p-4 gap-8'
				onSubmit={handleSubmit}>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.question}
					onChange={handleChange}
					type='text'
					name='question'
					placeholder={"Enter the question"}
				/>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.answer_1}
					onChange={handleChange}
					type='text'
					name='answer_1'
					placeholder={"Enter the first answer"}
				/>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.answer_2}
					onChange={handleChange}
					type='text'
					name='answer_2'
					placeholder='Enter the second answer'
				/>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.answer_3}
					onChange={handleChange}
					type='text'
					name='answer_3'
					placeholder='Enter the third answer'
				/>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.answer_4}
					onChange={handleChange}
					name='answer_4'
					placeholder='Enter the fourth answer'
				/>
				<div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
					<button
						className=' w-[70%] md:w-[35%] border-2 border-cyan-600 py-4 px-8 rounded-full font-bold text-[18px] hover:text-white hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center'
						type='submit'>
						Submit
					</button>
					<button
						onClick={() => navigate("/dashboard")}
						className=' w-[70%] md:w-[35%] border-2 border-red-400 py-4 px-8 rounded-full font-bold text-[18px] hover:text-white hover:bg-red-400 transition-all duration-300 flex items-center justify-center'>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default QuizEditForm;
