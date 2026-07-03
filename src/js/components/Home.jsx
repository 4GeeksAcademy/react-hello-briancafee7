import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	const centrado = {
		flex : "display-flex",
		jcenter : "justify-content-center"

	}
	return (
		<>
		<Navbar/>
		<Jumbotron />
		<Card />
		<Footer/>
		</>
		
	);
};

export default Home;