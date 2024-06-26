import React, { useState } from "react";
import { Collapse } from "react-collapse";
import WhoAmI from "./WhoAmI";
import Experience from "./Experience";
import WhyMe from "./WhyMe";
import MoreExperience from "./MoreExperience";

function IntroductionDesktop() {
	const [elemToDisplay1, setElemToDisplay] = useState(1);

	const handleElementToDisplay = (displayNr) => {
		if (elemToDisplay1 === displayNr);
		else setElemToDisplay(displayNr);
	};

	const [elemToDisplay5, setElemToDisplay5] = useState(0);
	const handleElementToDisplay5 = (displayNr5) => {
		setElemToDisplay5(elemToDisplay5 === displayNr5 ? 0 : displayNr5);
	};
	return (
		<div id="about">
			<div
				className="introduction introduction-desktop container"
				data-aos="zoom-in-up"
				data-aos-delay="200"
				data-aos-duration="1500"
			>
				<div className="divy">
					<div
						className="div1"
						id="div-about"
						onClick={() => handleElementToDisplay(1)}
					>
						O MNIE
					</div>
					<div
						className="div2"
						id="div-exp"
						onClick={() => handleElementToDisplay(2)}
					>
						KURSY/SZKOLENIA
					</div>
					<div
						className="div3"
						id="div-work"
						onClick={() => handleElementToDisplay(3)}
					>
						DOGS<strong>PAW</strong>SSION
					</div>
				</div>
				<Collapse isOpened={elemToDisplay1 === 1}>
					<div id="aboutKla" className="panel">
						<div className="desktop-about">
							<div className="about container px-5">
								<div className="row gx-5 align-items-center">
									<div className="col-lg-8">
										<div className="mb-5 mb-lg-0 text-justify">
											<WhoAmI header={"O MNIE"} />
										</div>
									</div>
									<div className="col-lg-4 d-flex justify-content-center">
										<img
											className="photo1"
											src={require("./photo/aboutMe.jpg")}
											alt={"Add more descriptive alt"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Collapse>
				<Collapse isOpened={elemToDisplay1 === 2}>
					<div id="aboutKla" className="panel">
						<div className="desktop-about">
							<div className="about container px-5">
								<div className="row gx-5 align-items-center">
									<div className="col-lg-8 text-margin-top">
										<div className="mb-5 mb-lg-0 text-justify">
											<Experience
												header={"KURSY / SZKOLENIA"}
											/>
										</div>
									</div>
									<div className="col-lg-4 d-flex justify-content-center">
										<img
											className="photo1"
											src={require("./photo/photo.jpg")}
											alt={"Add more descriptive alt"}
										/>
									</div>
									<div className="container">
										<div className="d-flex justify-content-center">
											<button
												className="offert-btn btn btn-light btn-font-size"
												onClick={() =>
													handleElementToDisplay5(1)
												}
											>
												{elemToDisplay5
													? "Mniej"
													: "Inne szkolenia, webinary i warsztaty"}
											</button>
										</div>
									</div>
									<Collapse isOpened={elemToDisplay5 === 1}>
										<div
											className="container offert-container"
											id="behawioryzm"
										>
											<MoreExperience />
										</div>
									</Collapse>
								</div>
							</div>
						</div>
					</div>
				</Collapse>
				<Collapse isOpened={elemToDisplay1 === 3}>
					<div id="aboutKla" className="panel">
						<div className="desktop-about">
							<div className="about container px-5">
								<div className="row gx-5 align-items-center">
									<div className="col-lg-8">
										<div className="mb-5 mb-lg-0 text-justify">
											<WhyMe header={"DOGSPAWSSION"} />
										</div>
									</div>
									<div className="col-lg-4 d-flex justify-content-center">
										<img
											className="photo1"
											src={require("./photo/WhyMe.jpg")}
											alt={"Add more descriptive alt"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Collapse>
			</div>
		</div>
	);
}

export default IntroductionDesktop;
