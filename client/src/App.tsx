import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./routes/Home";
import { Schedule } from "./routes/Schedule";
import { Week } from "./routes/Week";

function App() {
	return (
		<div className="bg-gray-300 h-screen">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/"><span>Home</span></Link>
							</li>
							<li>
								<Link to="/schedule">Schedule</Link>
							</li>
							<li>
								<Link to="/week">Week</Link>
							</li> 
						</ul>
					</nav>
					<Routes>
						<Route path="/schedule" element={<Schedule />}></Route>
						<Route path="/week" element={<Week />}></Route>
						<Route path="/" element={<Home />}></Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
