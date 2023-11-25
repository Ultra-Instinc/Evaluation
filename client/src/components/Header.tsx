import Search from "./Search";
import NotificationIcon from "@mui/icons-material/NotificationsActive";
import AlarmIcon from "@mui/icons-material/Email";
import { useDispatch } from "react-redux";
import { toggleUser } from "../store/slices/userSlice";

const Header = () => {
	const dispatch = useDispatch();
	return (
		<div className='h-[80px] flex items-center bg-gray-100'>
			{/* Welcome */}
			<div className='hidden lg:flex text-3xl   font-bold text-gray-700 pl-0 md:pl-12'>
				Welcome Talia,
			</div>
			<div className='flex flex-1 items-center justify-center gap-12 lg:justify-end '>
				{/* Search */}
				<Search />
				{/* authIcons */}
				<div className='flex text-cyan-800 items-center gap-2 px-2'>
					<div className='relative'>
						<NotificationIcon style={{ width: "35px", height: "35px" }} />
						<div className='absolute bg-cyan-600 leading-5 rounded-full px-1 text-white font-semibold top-0 right-0'>
							5
						</div>
					</div>
					<div className='relative'>
						<AlarmIcon style={{ width: "35px", height: "35px" }} />
						<div className='absolute bg-cyan-600 leading-5 rounded-full px-1 text-white font-semibold top-0 right-0'>
							5
						</div>
					</div>
					<div onClick={() => dispatch(toggleUser())}>
						<img
							className='w-10 h-10 rounded-full active:opacity-80 cursor-pointer hover:scale-105'
							src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg'
							alt='avatar_image'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
