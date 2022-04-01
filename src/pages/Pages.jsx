import React from "react";
import Home from "./Home";
import Countrie from "./Countrie";
import Region from "./Region";
import { Routes, Route } from "react-router-dom";

function Pages() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/countrie/:id" element={<Countrie />} />
			<Route path="/region/:type" element={<Region />} />
		</Routes>
	);
}

export default Pages;
