import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { DetailsCharacter } from "./views/DetailsCharacter.jsx";
import { DetailsPLanets } from "./views/DetailsPlanets.jsx";
import { DetailsStarships } from "./views/DetailsStarships.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Personajes } from "./component/Personajes.jsx";
import { Planetas } from "./component/Planetas.jsx";
import { Naves } from "./component/Naves.jsx";

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
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/personajes" element={<Personajes />}/>
						<Route path="/detallepersonaje/:id" element={<DetailsCharacter />}/>
						<Route path="/planetas" element={<Planetas />}/>
						<Route path="/detalleplaneta/:id" element={<DetailsPLanets />}/>
						<Route path="/naves" element={<Naves />}/>
						<Route path="/detallenave/:id" element={<DetailsStarships />}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);