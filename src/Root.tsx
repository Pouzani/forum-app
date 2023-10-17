import React from "react";
import NavbarForum from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<NavbarForum />
			<Outlet />
		</>
	);
};

export default Root;
