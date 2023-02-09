import React from "react";

function AdditionalsOffert() {
	return (
		<div className="row konsultacje">
			<div className="col-lg-9 text-beh">
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
					<div className="col-lg-8 txt-align">
						<p className="head-txt">Dodatkowe usługi</p>
						<p>Dodatkowe usługi:</p>
						<ul>
							<li>
								Porady w wyborze odpowiedniego żywienia i
								suplementacji
							</li>
							<li>
								Porady przed kupnem psa rasowego oraz wybraniem
								odpowiedniej hodowli lub adopcją psa
							</li>
							<li>Petsitting</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdditionalsOffert;
