import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Courses from "./pages/Courses";
import GradeBook from "./pages/GradeBook";
import Performance from "./pages/Performance";
import Announcement from "./pages/Announcement";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import AnnounceEditForm from "./pages/AnnounceEditForm";
import CreateQuiz from "./pages/CreateQuiz";
import CreateAnnounce from "./pages/CreateAnnounce";
import QuizEditForm from "./pages/QuizEditForm";

export default function App() {
	return (
		<BrowserRouter>
			<div className='flex  '>
				<div className='relative'>
					<SideBar />
				</div>
				<div className='flex flex-col flex-1 ml-24 lg:ml-64'>
					<div className='fixed top-0 w-full right-0 pl-24 lg:pl-64'>
						<Header />
					</div>
					<div className='mt-[80px]'>
						<Routes>
							<Route
								element={<HomePage />}
								path='/'
							/>
							<Route element={<RequireAuth />}>
								<Route
									path='/dashboard'
									element={<Dashboard />}
								/>
								<Route
									path='/dashboard/announce/:id'
									element={<AnnounceEditForm />}
								/>
								<Route
									path='/dashboard/create-announce'
									element={<CreateAnnounce />}
								/>
								<Route
									path='/dashboard/quiz/:id'
									element={<QuizEditForm />}
								/>
								<Route
									path='/dashboard/create-quiz'
									element={<CreateQuiz />}
								/>

								<Route
									path='/schedule'
									element={<Schedule />}
								/>
								<Route
									path='/courses'
									element={<Courses />}
								/>
								<Route
									path='/gradebook'
									element={<GradeBook />}
								/>
								<Route
									path='/performance'
									element={<Performance />}
								/>
								<Route
									path='/announcement'
									element={<Announcement />}
								/>
							</Route>
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}
