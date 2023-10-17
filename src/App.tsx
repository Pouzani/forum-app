import { Navbar, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Home from "./sections/Home";
import NavbarComponent from "./components/Navbar";
import Example from "./components/Navbar";
import NavbarForum from "./components/Navbar";
import CommitteeWord from "./sections/CommitteeWord";
import Argumentaire from "./sections/Argumentaire";
import Invitations from "./sections/Invitations";

function App() {
	return (
		<>
			<NavbarForum />
      <div className="flex flex-col gap-20">
			<Home />
      <CommitteeWord />
      <Argumentaire />
      <Invitations />
      </div>
		</>
	);
}

export default App;
