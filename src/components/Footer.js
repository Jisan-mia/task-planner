import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer>
			<h4> &copy; Jisan mia. </h4>
			<Link to="/about">About</Link>
		</footer>
	);
};

export default Footer;
