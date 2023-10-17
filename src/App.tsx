import { Navbar, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Heading from "./sections/Heading";
import NavbarComponent from "./components/Navbar";
import Example from "./components/Navbar";
import NavbarForum from "./components/Navbar";
import CommitteeWord from "./sections/CommitteeWord";
import Argumentaire from "./sections/Argumentaire";
import Invitations from "./sections/Invitations";
import Presentation from "./sections/Presentation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
