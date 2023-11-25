import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useDispatch } from "react-redux";
import { toggleQuizModal } from "../store/slices/userSlice";
const Due = () => {
	const dispatch = useDispatch();
	return (
		<div className='bg-white ml-4 lg:ml-0 flex-[0.19] mr-4 pl-3  flex flex-col rounded-lg min-w-[300px]  '>
			<div className='  pt-1 pr-3 flex items-start justify-between'>
				<h1 className='text-xl font-bold text-gray-600 '>What's due</h1>
				<p className='text-xl font-bold text-cyan-600 hover:cursor-pointer'>
					All
				</p>
			</div>
			<p className="className='font-[400] text-sm leading-[1] text-black-400   font-semibold">
				Supreme exam for MERN Stack
			</p>
			{/* unit 2 quiz */}
			<div className='flex flex-col lg:flex-col gap-8 mx-auto md:flex-row w-full '>
				<div className='flex flex-col  pb-6 border-b-[1px] border-b-gray-200 font-semibold text-gray-500 pt-8 px-0 sm:px-20 md:px-0 '>
					<div className='flex items-center justify-start text-cyan-600 pl-1'>
						<HourglassBottomIcon style={{ width: "30px", height: "30px" }} />
						<p className='text-gray-700 text-xl'>Unit 2 quiz</p>
					</div>
					<div className='flex flex-col text-sm gap-2'>
						<div className='flex gap-4 items-center text-gray-400 text-[14px]'>
							<p>Course</p>
							<p>Physics 02</p>
						</div>
						<div className='flex gap-4 items-center text-gray-400 text-[14px]'>
							<p>Topic</p>
							<p>Unit2 Motion and forces</p>
						</div>
						<div className='flex gap-4 items-center text-gray-400 text-[14px]'>
							<p>Duo to</p>
							<p>20 Dec 2017 - 09:00 PM</p>
						</div>
						<div
							onClick={() => dispatch(toggleQuizModal())}
							className='w-full h-fit text-center py-1 rounded-lg border-cyan-500 border-2 text-cyan-500 text-xl font-bold hover:cursor-pointer hover:bg-cyan-500 hover:text-white'>
							Start Quiz
						</div>
					</div>
				</div>

				{/* 12-12 Assignment */}
				<div className='flex flex-col  pb-6 border-b-[1px] border-b-gray-200 font-semibold text-gray-500 pt-8  px-0 sm:px-20 md:px-0 '>
					<div className='flex items-center justify-start text-cyan-600 pl-1'>
						<HourglassBottomIcon style={{ width: "30px", height: "30px" }} />
						<p className='text-gray-700 text-xl'>12-12 Assignment</p>
					</div>
					<div className='flex flex-col text-sm gap-2'>
						<div className='flex gap-4 items-center text-gray-400 text-[14px]'>
							<p>Course</p>
							<p>Arabic K12</p>
						</div>
						<div className='flex gap-4 items-center text-gray-400 text-[14px]'>
							<p>Topic</p>
							<p>الوحده الذانيه - الأفعال</p>
						</div>
						<div className='flex gap-4 items-center text-gray-400 text-[14px]'>
							<p>Duo to</p>
							<p>20 Dec 2017 - 09:00 PM</p>
						</div>
						<div
							onClick={() => dispatch(toggleQuizModal())}
							className='w-full h-fit text-center py-1 rounded-lg border-cyan-500 border-2 text-cyan-500 text-xl font-bold hover:cursor-pointer hover:bg-cyan-500 hover:text-white'>
							Solve Assignment
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Due;
