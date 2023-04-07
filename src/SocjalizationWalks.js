import React from "react";

function SocjalizationWalks() {
	return (
		<div className="row konsultacje">
			<div className="col-lg-11 text-beh">
				<div
					className="row"
					data-aos="flip-right"
					data-aos-delay="100"
					data-aos-duration="2000"
				>
					<div className="col-lg-4 dog-pic">
						<img
							className="dog2"
							src={require("./photo/aka.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="col-lg-8 d-flex align-items-center font-offerts">
						<div>
							<p className="head-txt text-center">
								Spacery socjalizacyjne
							</p>
							<p>
								Spacery odbywają się w małej grupie. Podczas
								spacerów nie dopuszczamy do bezpośredniego
								kontaktu między psami i nie podchodzimy do psów
								innych uczestników bez zezwolenia.
							</p>
							<ul>
								<li>
									Spacery grupowe - szczeniaki i młode psy -
									30 PLN
								</li>
								<li>Spacery grupowe - dorosłe psy - 40 PLN</li>
								<li>Spacery indywidualne - 50 PLN</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocjalizationWalks;
