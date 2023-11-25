import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../store/hooks";
import {
	handleTheAnnounceDeletion,
	populateAnnounceState,
} from "../store/slices/AnounceSlice";

const Announce = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const announceData = useAppSelector((state) => state.announce.announces);
	useEffect(() => {
		const fetchAnnounceData = async () => {
			const res = await window.fetch(`http://localhost:5555/api/announce/get`);
			const data = await res.json();
			dispatch(populateAnnounceState(data));
		};
		fetchAnnounceData();
	}, []);

	const handleAnnounceDelete = async (id: any) => {
		await window.fetch(`http://localhost:5555/api/announce/delete/${id}`, {
			method: "DELETE",
		});
		dispatch(handleTheAnnounceDeletion(id));
	};
	return (
		<div className='flex-[0.9] h-fit pb-10 ml-4 rounded-lg  bg-white shadow-lg shadow-gray-200 '>
			{/* announcement head */}
			<div className='flex items-start justify-between px-3 py-2 mb-4'>
				<h1 className='text-xl font-bold leading-5 text-gray-500'>
					Announcements <br />{" "}
					<span className='text-sm text-gray-400 leading-4 font-extralight'>
						This is so important just puckle up
					</span>{" "}
				</h1>
				<div
					onClick={() => navigate("/dashboard/create-announce")}
					className=' rounded-lg border-2 border-cyan-600 text-cyan-600 hover:text-white hover:bg-cyan-600 flex justify-center items-center cursor-pointer px-3 py-2'>
					ADD
				</div>
				<p className='text-xl font-bold text-cyan-600 hover:cursor-pointer'>
					All
				</p>
			</div>
			{/* people words */}
			{announceData && announceData.length === 0 && <Loader />}
			{announceData &&
				announceData.map((item) => {
					return (
						<div
							key={item?._id}
							className='flex relative flex-col md:flex-row py-2 text-center  md:text-start items-center'>
							<div className='absolute flex justify-end inset-0 right-2 hover:bg-cyan-400/10 transition-all duration-300  opacity-80  '>
								{/* edit & delete icons holder */}
								<div className='w-full h-full relative '>
									<div
										onClick={() => navigate(`/dashboard/announce/${item._id}`)}
										className='absolute top-8 right-1 cursor-pointer text-blue-400'>
										<ModeEditIcon />
									</div>
									<div
										onClick={() => handleAnnounceDelete(item?._id)}
										className='absolute top-1 right-1 cursor-pointer text-red-400'>
										<DeleteIcon />
									</div>
								</div>
							</div>

							<div className=' px-4 mx-2 flex gap-2 w-[250px]  '>
								{/* avatar */}
								<img
									className='w-14 h-14 rounded-full bg-cover '
									src={item?.avatar}
									alt='female-avatar'
								/>
								{/* info */}
								<div>
									<div className='font-semibold leading-4 pb-1'>
										{item?.title}
									</div>
									<div className='text-gray-400'>{item?.profession}</div>
								</div>
							</div>
							<div className='flex-1 md:pb-0 pb-6 max-w-[750px] mr-6  md:border-l-2 border-l-gray-200 px-6 font-[500] text-gray-400 '>
								{/* message */}
								{item?.message}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Announce;
