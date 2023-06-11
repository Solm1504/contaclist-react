import React from "react";
import { Link } from "react-router-dom";
import book from "../../img/book.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light justify-content-center addybook">
			<h1>Contact  address</h1><img src={book} className="book"></img>
		</nav>
	);
};