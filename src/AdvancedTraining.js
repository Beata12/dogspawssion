import React from "react";

function AdvancedTraining() {
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
					<div className="col-lg-8 txt-align">
						<p className="head-txt">
							Indywidualne Szkolenie zaawansowane
							<br />
							Po ukońćzeniu podstaw posłuszeństwa (10 spotkań)
						</p>
						<p>
							Szkolenie przeznaczone jest dla psów, które
							ukończyły szkolenie podstawowe. Szkolenie składa się
							z 10 spotkań. Jest możliwość uczestnictwa w
							pojedynczych zajęciach. Psy muszą być zaszczepione.
						</p>
					</div>
				</div>
			</div>
			<div className="container-box-2 col-lg-2" data-aos="fade-left">
				<div>
					<div className="price-paw">
						<img
							className="img-price"
							src={require("./photo/dogsPaw.jpg")}
							alt={"Add more descriptive alt"}
						/>
						<p className="paw-txt">650/75 złotych</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdvancedTraining;
