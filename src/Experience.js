import React from "react";

function Experience({ header }) {
	return (
		<div>
			<h1 className="text-lg-start mb-4 text-margin-top header-txt">
				{header}
			</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="font-offerts">
							<h3 className="mb-0">
								Kynoterapeuta(Dogoterapeuta)
							</h3>
							<div className="subheading mb-3">
								“Green Way” - Centrum Szkoleń Instruktorskich
							</div>
						</div>
					</div>
					<div className="col-md-4 text-md-end">
						<span className="">
							Nr licencji: 349/1/dogo/gw/2018
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="font-offerts">
							<h3 className="mb-0">
								Zoopsycholog / Behawiorysta <br />
								Specjalizacja psy
							</h3>
							<div className="subheading mb-3">
								Polska Akademia Zoopsychologii i Animaloterapii
								<br /> Polska Akademia Trenerów i Instruktorów
								Sportu Green Way
							</div>
						</div>
					</div>
					<div className="col-md-4 text-md-end">
						<span className="">
							Nr licencji: 503/ZOOP/PAZIA/GW/22
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="font-offerts">
							<h3 className="mb-0">
								Instruktor Szkolenia Psów
								<br />
								Trener Psów Stopień I + II
							</h3>
							<div className="subheading mb-3">
								Polska Akademia Zoopsychologii i Animaloterapii
								<br /> Polska Akademia Trenerów i Instruktorów
								Sportu Green Way
							</div>
						</div>
					</div>
					<div className="col-md-4 text-md-end">
						<span>Nr licencji: 542/TRP/GW/PAZiA/2021</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="font-offerts">
							<h3 className="mb-0">Petsitter</h3>
							<div className="subheading mb-3">COAPE</div>
						</div>
					</div>
					<div className="col-md-4 text-md-end">
						<span>
							Nr licencji: <br />
							989
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
