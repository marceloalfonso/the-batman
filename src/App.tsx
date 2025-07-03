import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Pictures from "./pages/pictures";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fotos" element={<Pictures />} />
				<Route path="/contato" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
