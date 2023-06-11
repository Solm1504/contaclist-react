import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { ContactsMain } from "./views/ContactsMain"
import { AddContact } from "./views/AddContact"
import { EditContact } from "./views/EditContact";

import { Navbar } from "./component/navbar";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
  					<Route exact path="/" element={<ContactsMain />} />
 					<Route exact path="/add" element={<AddContact />} />
  					<Route exact path="/edit-contact/:id" element={<EditContact />} />
					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);