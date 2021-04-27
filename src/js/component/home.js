import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cardx4 } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

const home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cardx4 />
			</div>
			<Footer />
		</>
	);
};
export default home;
