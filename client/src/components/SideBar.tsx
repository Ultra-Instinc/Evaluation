import Logo from "./Logo";
import Navbar from "./Navbar";

const SideBar = () => {
	return (
		<div className='  flex flex-col    gap-12 max-w-[300px] w-fit  bg-gradient-to-b from-cyan-950 to-cyan-600 fixed top-0 min-h-screen h-fit   left-0 '>
			{/* Logo */}
			<Logo />
			{/* Navigation */}
			<Navbar />
		</div>
	);
};

export default SideBar;
