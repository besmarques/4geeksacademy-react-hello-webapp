import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharSection from "../component/chars.jsx";
import VehicleSection from "../component/vehicles.jsx";
import PlanetsSection from "../component/planets.jsx";

export const Home = () => (
	<div className="container-fluid bg-dark bgimage">
		<div className="container text-light pt-3 pb-3">
			<div className="fs-3 fw-bold mb-5 text-warning border-bottom border-warning border-5">Characters</div>
            <div className="row pt-3 pb-3 d-flex justify-content-between horizontal-scrollable">
				<CharSection />
			</div>
			<VehicleSection />
			<PlanetsSection />
		</div>
			
	</div>
);
