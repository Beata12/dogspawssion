import React, { useState } from "react";
import { Collapse } from "react-collapse";
import AdvancedMore from "./AdvancedMore";

function AdvancedTraining() {
	const [elemToDisplay, setElemToDisplay] = useState(0);
	const handleElementToDisplay = (displayNr) => {
		setElemToDisplay(elemToDisplay === displayNr ? 0 : displayNr);
	};
	return (
		<div className="row konsultacje">
			<div
				className="col-lg-9 text-beh"
				data-aos="flip-left"
				data-aos-delay="100"
				data-aos-duration="2000"
			>
				<div className="row">
					<div className="col-lg-4 dog-pic">
						<img
							className="dog2"
							src={require("./photo/aka.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="col-lg-8 d-flex align-items-center">
						<div>
							<p className="head-txt text-center">
								Indywidualne Szkolenie zaawansowane
								<br />
								Po ukońćzeniu podstaw posłuszeństwa (10 spotkań){" "}
							</p>
							<br />
							Szkolenie przeznaczone jest dla psów, które
							ukończyły szkolenie podstawowe. Szkolenie składa się
							z 10 spotkań. Jest możliwość uczestnictwa w
							pojedynczych zajęciach. <br /> Psy muszą być
							zaszczepione.
						</div>
					</div>
				</div>
			</div>
			<div className="container-box-2 col-lg-2" data-aos="fade-left">
				<div>
					<div className="bonePrice">
						<img
							className="boneImg"
							src={require("./photo/bone2.jpg")}
							alt={"Add more descriptive alt"}
						/>
						<div className="boneText2">650/75 złotych</div>
					</div>
				</div>
			</div>
			<div className="container btnKinderMore">
				<div className="d-flex justify-content-center">
					<button
						className="offert-btn btn btn-light btn-font-size"
						onClick={() => handleElementToDisplay(1)}
					>
						{elemToDisplay ? "Mniej" : "Więcej	"}
					</button>
				</div>
			</div>
			<Collapse isOpened={elemToDisplay === 1}>
				<div className="container offert-container" id="behawioryzm">
					<AdvancedMore />
				</div>
			</Collapse>
		</div>
	);
}

export default AdvancedTraining;
