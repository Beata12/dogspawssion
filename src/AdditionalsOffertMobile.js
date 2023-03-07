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
				<div className="col-5">
					<p className="font-bold">Dodatkowe usługi</p>
				</div>
				<div>
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
			<div className="row konsultacje">
				<div className="col-5 dog-pic">
					<img
						className="dog-mobile"
						src={require("./photo/pies2.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="col-5">
					<h2>Nosework</h2>
					<div
						className="info-soon"
						data-aos="zoom-out-down"
						data-aos-delay="100"
						data-aos-duration="2000"
					>
						Informacje wkrótce...
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdditionalsOffertMobile;
