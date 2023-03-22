import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Create from "./components/Create";
import NavScrollExample from "./components/Navbar";
export const UserContent = createContext();
function App() {
	const [user, setUser] = useState({});
	return (
		<UserContent.Provider value={{ setUser, user }}>
			<BrowserRouter>
				<div className="App">
					<nav>
						<NavScrollExample/>
					</nav>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/login/:out" element={<Login />} />
						<Route path="/create" element={<Create />} />
						<Route path="/" element={<Home />} />
						<Route path="/:slug" element={<Home />} />
						<Route path="/detail/:slug/:id" element={<Detail />} />
					</Routes>
				</div>
			</BrowserRouter>
		</UserContent.Provider>
	);
}

export default App;
