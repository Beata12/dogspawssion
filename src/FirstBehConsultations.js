import React from "react";

function FirstBehConsultations() {
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
						<p className="head-txt">
							Pierwsza konsultacja behawioralna
							<br />
							(on-site/stacjonarna)
						</p>
						<p>
							Konsultacja odbywa się w miejscu przebywania psa, w
							jego naturalnym otoczeniu i trwa zwykle około 1,5 do
							2 godzin. W trakcie spotkania przeprowadzam wywiad z
							opiekunami oraz obserwuję zachowania psa w domu oraz
							podczas spaceru. Skupiam się na takich aspektach jak
							funkcjonowanie psa w domu, relacja z domownikami
							oraz innymi zwierzętami, stan zdrowia zwierzęcia z
							uwzględnieniem jego sposobu żywienia i codziennych
							aktywności.
							<br />
							Celem konsultacji jest ocena zachowania psa mająca
							na celu identyfikacje przyczyn występowania
							problemów. W oparciu o nią układam indywidualny plan
							pracy z psem potrzebny do wyeliminowania
							niepożądanych/nieakceptowanych zachowań.
							<br />
							Po konsultacji właściciel otrzymuje drogą mailową
							zalecenia wraz z podsumowaniem wizyty.
						</p>
					</div>
				</div>
			</div>
			<div className="container-box-2 col-lg-3" data-aos="fade-right">
				<div className="bonePrice">
					<img
						className="boneImg"
						src={require("./photo/bone.jpg")}
						alt={"Add more descriptive alt"}
					/>
					<div className="boneText">150 złotych</div>
				</div>
			</div>
		</div>
	);
}

export default FirstBehConsultations;
