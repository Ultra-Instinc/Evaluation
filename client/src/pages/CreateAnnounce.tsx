import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateAnnounce = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: "",
		avatar: "",
		profession: "",
		message: "",
	});
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await window.fetch(`http://localhost:5555/api/announce/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		toast("Announcement Created Successfully.");
		setFormData({
			title: "",
			avatar: "",
			profession: "",
			message: "",
		});
	};
	return (
		<div className='absolute bg-white z-30 w-[100vw] h-full '>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col m-4 w-[80vw] md:w-[50vw] p-4 gap-8'
				// onSubmit={handleSubmit}
			>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.title}
					onChange={handleChange}
					type='text'
					name='title'
					placeholder={"Enter the name"}
				/>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.profession}
					onChange={handleChange}
					type='text'
					name='profession'
					placeholder='Profession'
				/>
				<input
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.avatar}
					onChange={handleChange}
					type='text'
					name='avatar'
					placeholder='Enter image Url string'
				/>
				<textarea
					className='bg-transparent border rounded-lg py-2 md:w-[100%] w-[100%] px-5 '
					value={formData.message}
					onChange={handleChange}
					name='message'
					cols={30}
					rows={10}
					placeholder='Enter the message'></textarea>
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
			<Toaster />
		</div>
	);
};

export default CreateAnnounce;
