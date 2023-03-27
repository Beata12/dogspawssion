import React from "react";

function FirstOnlineBehCons() {
	return (
		<div className="row konsultacje">
			<div
				className="col-lg-9 text-beh"
				data-aos="flip-right"
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
					<div className="col-lg-8 d-flex align-items-center">
						<div>
							<p className="head-txt text-center">
								Pierwsza konsultacja behawioralna (online)
							</p>
							<p>
								Konsultacja odbywa się online na platformie Zoom
								i trwa zwykle około 1,5 godziny. W trakcie
								spotkania przeprowadzam wywiad z opiekunami oraz
								obserwację zachowania psa na podstawie nagrań
								wysłanych przez opiekunów. Skupiam się na takich
								aspektach jak funkcjonowanie psa w domu, relacja
								z domownikami oraz innymi zwierzętami, stan
								zdrowia zwierzęcia z uwzględnieniem sposobu
								żywienia i codziennych aktywności.
								<br />
								Celem konsultacji jest ocena zachowania psa
								mająca na celu identyfikacje przyczyn
								występowania problemów. W oparciu o nią układam
								indywidualny plan pracy z psem potrzebny do
								wyeliminowania niepożądanych/nieakceptowanych
								zachowań.
								<br />
								Po konsultacji właściciel otrzymuje drogą
								mailową zalecenia wraz z podsumowaniem wizyty.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="container-box-2 col-lg-3"
				data-aos="fade-left"
				data-aos-delay="100"
				data-aos-duration="2000"
			>
				<div>
					<div className="bonePrice">
						<img
							className="boneImg"
							src={require("./photo/bone.jpg")}
							alt={"Add more descriptive alt"}
						/>
						<div className="boneText">100 PLN</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FirstOnlineBehCons;
