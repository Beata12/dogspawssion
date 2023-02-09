import React from "react";

function TrainingMobile() {
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
					<p>
						Indywidualne Psie przedszkole <br />
						do 6 miesięcy (10 spotkań)
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
					<p>
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
					<p>
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
			</div>
		</div>
	);
}

export default TrainingMobile;
