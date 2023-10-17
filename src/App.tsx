import { Navbar, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar";

function App() {
	return (
		<NextUIProvider>
			<NavbarComponent />
			<Home />
		</NextUIProvider>
	);
}

export default App;
