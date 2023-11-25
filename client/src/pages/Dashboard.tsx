import Announce from "../components/Announce";
import Due from "../components/Due";
import QuizModal from "../components/QuizModal";

const Dashboard = () => {
	return (
		<div className='flex relative min-h-[91.29243vh]  h-fit bg-gray-100  flex-col '>
			<QuizModal />
			<div className='flex flex-col lg:flex-row shadow-lg  shadow-gray-200 bg-white pb-4 justify-between m-4 rounded-lg  '>
				<div className='lg:pl-14 pl-2 gap-2 flex flex-col  items-center lg:items-start w-fit'>
					<h1 className='uppercase text-6xl pt-8 font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent'>
						exams time{" "}
					</h1>
					<p className='font-semibold text-lg text-gray-500'>
						Here we are, Are you ready to fight? don't worry we prepared some
						tips to be ready for your exams.
					</p>
					<br />
					<span className='italic font-[400]  text-gray-400 '>
						"Nothing happens until someting moves"- Albert Einstein
					</span>
					<div className='px-8 text-center py-3 bg-cyan-500 rounded-lg text-2xl text-white w-fit hover:cursor-pointer hover:opacity-80 hover:-translate-y-[1px]  transition-all hover:scale-105 active:scale-95 duration-300  active:translate-y-[1px] font-bold '>
						View exams tips
					</div>
				</div>
				<div className='hidden w-[450px] lg:flex bg-cover'>
					<img
						className='bg-cover bg-no-repeat'
						src='laptop+coffee2.png'
						alt=''
					/>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-4  '>
				{/* Announcements */}

				<Announce />

				{/* what's due */}

				<Due />
			</div>
		</div>
	);
};

export default Dashboard;
