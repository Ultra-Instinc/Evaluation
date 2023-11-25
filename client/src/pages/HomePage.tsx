import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
	const user = useAppSelector((state) => state.user.value);
	const navigate = useNavigate();
	useEffect(() => {
		{
			if (user === true) {
				navigate("/dashboard");
			}
		}
	}, [user]);
	return (
		<div className='bg-gray-700 text-white flex items-center justify-center text-6xl h-[91.2vh]'>
			<div>This is Home Page</div>
			<div></div>
		</div>
	);
};

export default HomePage;
