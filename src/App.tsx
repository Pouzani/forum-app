import { Navbar, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar";
import Example from "./components/Navbar";
import NavbarForum from "./components/Navbar";

function App() {
	return (
		<>
			<NavbarForum />
			<Home />
		</>
	);
}

export default App;
