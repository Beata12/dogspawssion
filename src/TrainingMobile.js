import React, { useState } from "react";
import { Collapse } from "react-collapse";
import KindergartenMore from "./KindergartenMore";
import ObedienceMore from "./ObedienceMore";
import AdvancedMore from "./AdvancedMore";

function TrainingMobile() {
	const [elemToDisplay, setElemToDisplay] = useState(0);
	const handleElementToDisplay = (displayNr) => {
		setElemToDisplay(elemToDisplay === displayNr ? 0 : displayNr);
	};
	const [elemToDisplay1, setElemToDisplay1] = useState(0);
	const handleElementToDisplay1 = (displayNr1) => {
		setElemToDisplay1(elemToDisplay1 === displayNr1 ? 0 : displayNr1);
	};
	const [elemToDisplay2, setElemToDisplay2] = useState(0);
	const handleElementToDisplay2 = (displayNr2) => {
		setElemToDisplay2(elemToDisplay2 === displayNr2 ? 0 : displayNr2);
	};

	return (
		<div className="container" id="inywidualne-mobile">
			<div className="row konsultacje">
				<div className="col-5 dog-pic">
					<img
						className="dog-mobile"
						src={require("./photo/pies2.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="col-7">
					<p className="font-bold">
						Indywidualne Psie przedszkole <br />
						do 6 miesiąca (10 spotkań)
					</p>
					<ul>
						<li>Cana: 450 zł / 50 zł</li>
					</ul>
				</div>
				<div>
					<p className="txt-offert-mobile">
						Szkolenie przeznaczone jest dla szczeniąt w wieku od 2
						do 6 miesięcy i składa się z 10 spotkań. Jest możliwość
						uczestnictwa w pojedynczych zajęciach. <br />
						Psy muszą być zaszczepione.
					</p>
				</div>
				<Collapse isOpened={elemToDisplay === 1}>
					<div
						className="container offert-container"
						id="behawioryzm"
					>
						<KindergartenMore />
					</div>
				</Collapse>
				<div className="d-flex justify-content-center">
					<button
						className="offert-btn btn btn-light"
						onClick={() => handleElementToDisplay(1)}
					>
						{elemToDisplay ? "Mniej" : "Więcej"}
					</button>
				</div>
			</div>
			<div className="row konsultacje">
				<div className="col-5 dog-pic">
					<img
						className="dog-mobile"
						src={require("./photo/pies2.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="col-7">
					<p className="font-bold">
						Indywidualne Szkolenie podstawowe
						<br />
						Podstawy posłuszeństwa <br />
						Od 6 miesiąca (10 spotkań):
					</p>
					<ul>
						<li>Cana: 600 zł / 70 zł</li>
					</ul>
				</div>
				<div>
					<p className="txt-offert-mobile">
						Szkolenie przeznaczone jest dla psów powyżej 6 miesiąca
						życia. Szkolenie składa się z 10 spotkań. Jest możliwość
						uczestnictwa w pojedynczych zajęciach. Psy muszą być
						zaszczepione.
					</p>
				</div>
				<Collapse isOpened={elemToDisplay1 === 1}>
					<div
						className="container offert-container"
						id="behawioryzm"
					>
						<ObedienceMore />
					</div>
				</Collapse>
				<div className="d-flex justify-content-center">
					<button
						className="offert-btn btn btn-light"
						onClick={() => handleElementToDisplay1(1)}
					>
						{elemToDisplay1 ? "Mniej" : "Więcej"}
					</button>
				</div>
			</div>
			<div className="row konsultacje">
				<div className="col-5 dog-pic">
					<img
						className="dog-mobile"
						src={require("./photo/pies2.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="col-7">
					<p className="font-bold">
						Indywidualne Szkolenie zaawansowane
						<br />
						Po ukońćzeniu podstaw posłuszeństwa (10 spotkań)
					</p>
					<ul>
						<li>Cana: 650 zł / 75 zł</li>
					</ul>
				</div>
				<div>
					<p className="txt-offert-mobile">
						Szkolenie przeznaczone jest dla psów, które ukończyły
						szkolenie podstawowe. Szkolenie składa się z 10 spotkań.
						Jest możliwość uczestnictwa w pojedynczych zajęciach.
						Psy muszą być zaszczepione.
					</p>
				</div>
				<Collapse isOpened={elemToDisplay2 === 1}>
					<div
						className="container offert-container"
						id="behawioryzm"
					>
						<AdvancedMore />
					</div>
				</Collapse>
				<div className="d-flex justify-content-center">
					<button
						className="offert-btn btn btn-light"
						onClick={() => handleElementToDisplay2(1)}
					>
						{elemToDisplay2 ? "Mniej" : "Więcej"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default TrainingMobile;
