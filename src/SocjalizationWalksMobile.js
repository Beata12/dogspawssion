import React from "react";

function SocjalizationWalksMobile() {
	return (
		<div className="container" id="szkolenie-mobile">
			<div className="row konsultacje">
				<div className="col-5 dog-pic">
					<img
						className="dog-mobile"
						src={require("./photo/pies2.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="col-7">
					<p>Spacery socjalizacyjne</p>
				</div>
				<div>
					<p className="txt-offert-mobile">
						Spacery odbywają się w małej grupie. Podczas spacerów
						nie dopuszczamy do bezpośredniego kontaktu między psami
						i nie podchodzimy do psów innych uczestników bez
						zezwolenia.
					</p>
					<ul>
						<li>
							Spacery grupowe - szczeniaki i młode psy - 20 zł
						</li>
						<li>Spacery grupowe - dorosłe psy - 30zł</li>
						<li>Spacery indywidualne - 50zł</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SocjalizationWalksMobile;
