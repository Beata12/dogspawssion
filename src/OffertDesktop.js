import React, { useState } from "react";
import { Collapse } from "react-collapse";
import FirstBehConsultations from "./FirstBehConsultations";
import NthBehConsultation from "./NthBehConsultation";
import FirstOnlineBehCons from "./FirstOnlineBehCons";
import NthOnlineBehCons from "./NthOnlineBehCons";
import DogKindergarten from "./DogKindergarten";
import ObedienceBasic from "./ObedienceBasic";
import AdvancedTraining from "./AdvancedTraining";
import SocjalizationWalks from "./SocjalizationWalks";
import AdditionalsOffert from "./AdditionalsOffert";

function OffertDesktop() {
	const [elemToDisplay, setElemToDisplay] = useState(0);
	const handleElementToDisplay = (displayNr) => {
		setElemToDisplay(elemToDisplay === displayNr ? 0 : displayNr);
	};

	// const [elemToDisplay2, setElemToDisplay2] = useState(0);
	// const handleElementToDisplay2 = (displayNr2) => {
	// 	setElemToDisplay2(elemToDisplay2 === displayNr2 ? 0 : displayNr2);
	// };

	// const [elemToDisplay3, setElemToDisplay3] = useState(0);
	// const handleElementToDisplay3 = (displayNr3) => {
	// 	setElemToDisplay3(elemToDisplay3 === displayNr3 ? 0 : displayNr3);
	// };

	// const [elemToDisplay4, setElemToDisplay4] = useState(0);
	// const handleElementToDisplay4 = (displayNr4) => {
	// 	setElemToDisplay4(elemToDisplay4 === displayNr4 ? 0 : displayNr4);
	// };

	return (
		<div
			className="offert-container-desktop"
			id="ofert"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-duration="2000"
		>
			<div className="container">
				<div>
					<h1>OFERTA</h1>
				</div>
				<div className="container oferts">
					<div className="row">
						<div className="col-lg-3 beh-pic" id="div-beh">
							<div>
								<img
									className="beh-img"
									src={require("./photo/dog-beh.jpg")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert">
								KONSULTACJE BEHAWIRRALNE <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(1)}
								>
									Więcej
								</button>
							</div>
						</div>
						<div className="col-lg-3 beh-pic" id="div-ind">
							<div>
								<img
									className="beh-img"
									src={require("./photo/dog-beh.jpg")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert offert-margin">
								SZKOLENIA <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(2)}
								>
									{elemToDisplay ? "Mniej" : "Więcej"}
								</button>
							</div>
							<div></div>
						</div>
						<div className="col-lg-3 beh-pic" id="div-szk">
							<div>
								<img
									className="beh-img"
									src={require("./photo/dog-beh.jpg")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert">
								SPACERY SOCJALIZACYJNE <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(3)}
								>
									{elemToDisplay ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
						<div className="col-lg-3 beh-pic" id="div-szk">
							<div>
								<img
									className="beh-img"
									src={require("./photo/dog-beh.jpg")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert">
								DODATKOWE USŁUGI <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(4)}
								>
									{elemToDisplay ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
				</div>
				<Collapse isOpened={elemToDisplay === 1}>
					<div
						className="container offert-container"
						id="behawioryzm"
					>
						<FirstBehConsultations />
						<NthBehConsultation />
						<FirstOnlineBehCons />
						<NthOnlineBehCons />
					</div>
				</Collapse>
				<Collapse isOpened={elemToDisplay === 2}>
					<div
						className="container offert-container"
						id="inywidualne"
					>
						<DogKindergarten />
						<ObedienceBasic />
						<AdvancedTraining />
					</div>
				</Collapse>
				<Collapse isOpened={elemToDisplay === 3}>
					<div className="container offert-container" id="szkolenie">
						<SocjalizationWalks />
					</div>
				</Collapse>
				<Collapse isOpened={elemToDisplay === 4}>
					<div
						className="container offert-container"
						id="additionals"
					>
						<AdditionalsOffert />
					</div>
				</Collapse>
			</div>
		</div>
	);
}

export default OffertDesktop;
