import { Link, useLocation } from "react-router-dom";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import LineAxisOutlinedIcon from "@mui/icons-material/LineAxisOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

const Navbar = () => {
	const navBarData = [
		{
			id: 1,
			icon: <HouseOutlinedIcon style={{ width: "45px", height: "45px" }} />,
			title: "dashboard",
			path: "/dashboard",
		},
		{
			id: 2,
			icon: (
				<CalendarMonthOutlinedIcon style={{ width: "45px", height: "45px" }} />
			),
			title: "schedule",
			path: "/schedule",
		},
		{
			id: 3,
			icon: <ArticleIcon style={{ width: "45px", height: "45px" }} />,
			title: "courses",
			path: "/courses",
		},
		{
			id: 4,
			icon: <SchoolIcon style={{ width: "45px", height: "45px" }} />,
			title: "gradebook",
			path: "/gradebook",
		},
		{
			id: 5,
			icon: <LineAxisOutlinedIcon style={{ width: "45px", height: "45px" }} />,
			title: "performance",
			path: "/performance",
		},
		{
			id: 6,
			icon: <CampaignOutlinedIcon style={{ width: "45px", height: "45px" }} />,
			title: "announcement",
			path: "/announcement",
		},
	];
	const location = useLocation().pathname;

	return (
		<div className='my-auto sticky top-1 '>
			{navBarData.map((nav) => (
				<Link
					to={nav.path}
					key={nav.id}
					className={`flex gap-5 m-[1px] text-gray-200 text-xl  group  px-6 py-4 items-center hover:bg-white hover:cursor-pointer transition-all duration-300 ease-in-out rounded-sm  hover:translate-x-[3px] ${
						nav.path === location && "bg-white translate-x-[3px]"
					}  `}>
					<div
						className={`text-4xl group-hover:text-cyan-800 -translate-y-1 ${
							nav.path === location && "text-cyan-800"
						}`}>
						{nav.icon}
					</div>
					<div
						className={`hidden lg:inline-block group-hover:text-cyan-600 capitalize font-semibold ${
							nav.path === location && "text-cyan-800"
						}`}>
						{nav.title}
					</div>
				</Link>
			))}
		</div>
	);
};

export default Navbar;
