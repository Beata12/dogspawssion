import React from "react";
import { Link } from "react-router-dom";
import MoreExperience from "./MoreExperience";

function newPage() {
	return (
		<div>
			HomePage
			<Link to="./MoreExperience">Go to more experience</Link>
		</div>
	);
}

export default newPage;
