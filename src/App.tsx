import { Navbar, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar";
import Example from "./pages/simple_branded_with_stacked_links";

function App() {
	return (
		<>
			<Example />
			<Home />
		</>
	);
}

export default App;
