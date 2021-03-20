import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
const Header = ({ title, onAdd, showAddTask }) => {
	const location = useLocation();
	return (
		<header className="header">
			<h1> {title} </h1>
			{location.pathname === "/about" ? (
				""
			) : (
				<Button
					onAdd={onAdd}
					color={showAddTask ? "#e22" : "Green"}
					text={showAddTask ? "Close" : "Add"}
				/>
			)}
		</header>
	);
};

export default Header;
