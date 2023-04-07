import React, { useState } from "react";
import AdditionalsOffertMobile from "./AdditionalsOffertMobile";
import SocjalizationWalksMobile from "./SocjalizationWalksMobile";
import TrainingMobile from "./TrainingMobile";
import BehConsultationMobile from "./BehConsultationMobile";
import { Collapse } from "react-collapse";

function OffertMobile() {
	const [elemToDisplay, setElemToDisplay] = useState(0);
	const handleElementToDisplay = (displayNr) => {
		setElemToDisplay(elemToDisplay === displayNr ? 0 : displayNr);
	};

	const [elemToDisplay2, setElemToDisplay2] = useState(0);
	const handleElementToDisplay2 = (displayNr2) => {
		setElemToDisplay2(elemToDisplay2 === displayNr2 ? 0 : displayNr2);
	};

	const [elemToDisplay3, setElemToDisplay3] = useState(0);
	const handleElementToDisplay3 = (displayNr3) => {
		setElemToDisplay3(elemToDisplay3 === displayNr3 ? 0 : displayNr3);
	};

	const [elemToDisplay4, setElemToDisplay4] = useState(0);
	const handleElementToDisplay4 = (displayNr4) => {
		setElemToDisplay4(elemToDisplay4 === displayNr4 ? 0 : displayNr4);
	};

	return (
		<div id="offert">
			<div
				data-aos="zoom-in-up"
				data-aos-delay="200"
				data-aos-duration="1500"
				className="offert-container-mobile"
			>
				<div className="container">
					<div className="offer-margin">
						<h1 className="offert-header fw-bold">OFERTA</h1>
					</div>
					<div className="beh-pic" id="div-beh-mobile">
						<div>
							<img
								className="beh-img"
								src={require("./photo/akira.png")}
								alt={"Add more descriptive alt"}
							/>
						</div>
						<div className="ofert">
							<div className="text-uppercase offert-hdr-mbl">
								KONSULTACJE BEHAWIORALNE
							</div>
							<div>
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(1)}
								>
									{elemToDisplay ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
					<Collapse isOpened={elemToDisplay === 1}>
						<BehConsultationMobile />
					</Collapse>
					<div className="beh-pic" id="div-ind-mobile">
						<div>
							<img
								className="beh-img"
								src={require("./photo/akira.png")}
								alt={"Add more descriptive alt"}
							/>
						</div>
						<div className="ofert">
							<div className="text-uppercase offert-hdr-mbl">
								SZKOLENIA
							</div>
							<div>
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay2(1)}
								>
									{elemToDisplay3 ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
					<Collapse isOpened={elemToDisplay2 === 1}>
						<TrainingMobile />
					</Collapse>
					<div className="beh-pic" id="div-szk-mobile">
						<div>
							<img
								className="beh-img"
								src={require("./photo/akira.png")}
								alt={"Add more descriptive alt"}
							/>
						</div>
						<div className="ofert">
							<div className="text-uppercase offert-hdr-mbl">
								SPACERY SOCJALIZACYJNE
							</div>
							<div>
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay3(1)}
								>
									{elemToDisplay3 ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
					<Collapse isOpened={elemToDisplay3 === 1}>
						<SocjalizationWalksMobile />
					</Collapse>
					<div className="beh-pic" id="div-additionals-mobile">
						<div>
							<img
								className="beh-img"
								src={require("./photo/akira.png")}
								alt={"Add more descriptive alt"}
							/>
						</div>
						<div className="ofert">
							<div className="text-uppercase offert-hdr-mbl">
								Dodatkowe usługi
							</div>
							<div>
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay4(1)}
								>
									{elemToDisplay4 ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
					<Collapse isOpened={elemToDisplay4 === 1}>
						<AdditionalsOffertMobile />
					</Collapse>
				</div>
			</div>
		</div>
	);
}

export default OffertMobile;
