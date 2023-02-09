import React from "react";

function AdditionalsOffertMobile() {
	return (
		<div className="container" id="additionals-mobile">
			<div className="row konsultacje">
				<div className="col-5 dog-pic">
					<img
						className="dog-mobile"
						src={require("./photo/pies2.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="col-7">
					<p>Dodatkowe usługi</p>
				</div>
				<div>
					<p className="txt-offert-mobile">Dodatkowe usługi:</p>
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
	);
}

export default AdditionalsOffertMobile;
