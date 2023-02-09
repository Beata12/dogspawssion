import React, { useState, useCallback } from "react";
import AdditionalsOffertMobile from "./AdditionalsOffertMobile";
import SocjalizationWalksMobile from "./SocjalizationWalksMobile";
import TrainingMobile from "./TrainingMobile";
import BehConsultationMobile from "./BehConsultationMobile";
import { Collapse } from "react-collapse";

function OffertMobile() {
	const [isBehClicked, setIsBehClicked] = useState(false);
	const [isTrainingClicked, setIsTrainingClicked] = useState(false);
	const [isWalksClicked, setIsWalksClicked] = useState(false);
	const [isAdditionalsClicked, setIsAdditionalsClicked] = useState(false);

	return (
		<div
			className="offert-container-mobile"
			id="offer-mobile"
			// data-aos="fade-up"
			// data-aos-duration="1000"
		>
			<div className="container">
				<div className="offer-margin">
					<h1>OFERTA</h1>
				</div>

				<div className="beh-pic" id="div-beh-mobile">
					<div>
						<img
							className="beh-img"
							src={require("./photo/dog-beh.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="ofert">
						<div>KONSULTACJE BEHAWIORALNE</div>
						<div>
							<button
								onClick={useCallback(
									() => setIsBehClicked(!isBehClicked),
									[isBehClicked]
								)}
								type="button"
								className="btn btn-light"
							>
								Więcej
							</button>
						</div>
					</div>
				</div>
				<Collapse isOpened={isBehClicked}>
					<BehConsultationMobile />
				</Collapse>
				<div className="beh-pic" id="div-ind-mobile">
					<div>
						<img
							className="beh-img"
							src={require("./photo/dog-beh.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="ofert">
						<div>SZKOLENIA</div>
						<div>
							<button
								onClick={useCallback(
									() =>
										setIsTrainingClicked(
											!isTrainingClicked
										),
									[isTrainingClicked]
								)}
							>
								Więcej
							</button>
						</div>
					</div>
				</div>
				<Collapse isOpened={isTrainingClicked}>
					<TrainingMobile />
				</Collapse>
				<div className="beh-pic" id="div-szk-mobile">
					<div>
						<img
							className="beh-img"
							src={require("./photo/dog-beh.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="ofert">
						<div>SPACERY SOCJALIZACYJNE</div>
						<div>
							<button
								onClick={useCallback(
									() => setIsWalksClicked(!isWalksClicked),
									[isWalksClicked]
								)}
							>
								Więcej
							</button>
						</div>
					</div>
				</div>
				<Collapse isOpened={isWalksClicked}>
					<SocjalizationWalksMobile />
				</Collapse>
				<div className="beh-pic" id="div-additionals-mobile">
					<div>
						<img
							className="beh-img"
							src={require("./photo/dog-beh.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="ofert">
						<div>Dodatkowe usługi</div>
						<div>
							<button
								onClick={useCallback(
									() =>
										setIsAdditionalsClicked(
											!isAdditionalsClicked
										),
									[isAdditionalsClicked]
								)}
							>
								Więcej
							</button>
						</div>
					</div>
				</div>
				<Collapse isOpened={isAdditionalsClicked}>
					<AdditionalsOffertMobile />
				</Collapse>
			</div>
		</div>
	);
}

export default OffertMobile;
