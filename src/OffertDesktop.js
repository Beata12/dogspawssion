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
import Nosework from "./Nosework";
import Dogotheraphy from "./Dogotheraphy";

function OffertDesktop() {
	const [openElem, setOpenElem] = useState(null);

	const handleElementToDisplay = (elemId) => {
		if (elemId === openElem) {
			setOpenElem(null);
		} else {
			setOpenElem(elemId);
		}
	};

	return (
		<div
			className="offert-container-desktop"
			id="offert"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-duration="2000"
		>
			<div className="container">
				<div>
					<h1 className="offert-text font-weight-bold">OFERTA</h1>
				</div>
				<div className="container oferts">
					<div className="row">
						<div className="col-lg-3 beh-pic" id="div-beh">
							<div>
								<img
									className="beh-img"
									src={require("./photo/akira.png")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert">
								KONSULTACJE BEHAWIRRALNE <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(1)}
								>
									{openElem === 1 ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
						<div className="col-lg-3 beh-pic" id="div-ind">
							<div>
								<img
									className="beh-img"
									src={require("./photo/akira.png")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert offert-margin">
								SZKOLENIA <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(2)}
								>
									{openElem === 2 ? "Mniej" : "Więcej"}
								</button>
							</div>
							<div></div>
						</div>
						<div className="col-lg-3 beh-pic" id="div-szk">
							<div>
								<img
									className="beh-img"
									src={require("./photo/akira.png")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert">
								SPACERY SOCJALIZACYJNE <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(3)}
								>
									{openElem === 3 ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
						<div className="col-lg-3 beh-pic" id="div-szk">
							<div>
								<img
									className="beh-img"
									src={require("./photo/akira.png")}
									alt={"Add more descriptive alt"}
								/>
							</div>
							<div className="ofert">
								DODATKOWE USŁUGI <br />
								<button
									className="offert-btn btn btn-light"
									onClick={() => handleElementToDisplay(4)}
								>
									{openElem === 4 ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
				</div>
				<Collapse isOpened={openElem === 1}>
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
				<Collapse isOpened={openElem === 2}>
					<div
						className="container offert-container"
						id="inywidualne"
					>
						<DogKindergarten />
						<ObedienceBasic />
						<AdvancedTraining />
					</div>
				</Collapse>
				<Collapse isOpened={openElem === 3}>
					<div className="container offert-container" id="szkolenie">
						<SocjalizationWalks />
					</div>
				</Collapse>
				<Collapse isOpened={openElem === 4}>
					<div
						className="container offert-container"
						id="additionals"
					>
						<AdditionalsOffert />
						<Nosework />
						<Dogotheraphy />
					</div>
				</Collapse>
			</div>
		</div>
	);
}

export default OffertDesktop;
