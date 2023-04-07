import React from "react";

function AdditionalsOffert() {
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
					<div className="col-lg-8 d-flex align-items-center d-flex">
						<div className="align-items-start flex-column bd-highlight mb-3 font-offerts">
							<p className="head-txt text-center">
								Dodatkowe usługi
							</p>
							<div className="mb-auto p-2 bd-highlight">
								<ul>
									<li>
										Porady w wyborze odpowiedniego żywienia
										i suplementacji
									</li>
									<li>
										Porady przed kupnem psa rasowego oraz
										wybraniem odpowiedniej hodowli lub
										adopcją psa
									</li>
									<li>Petsitting</li>
								</ul>
							</div>
							<div className="p-2 bd-highlight text-center">
								<h5>Cena ustalana indywidualnie</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdditionalsOffert;
