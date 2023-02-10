import React from "react";

function NthBehConsultation() {
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
					<div className="col-lg-8 d-flex align-items-center">
						<div>
							<p className="head-txt text-center">
								Kolejna konsultacja behawioralna
								(on-site/stacjonarna)
							</p>
							<br />
							Konsultacje odbywają się w miejscu wyznaczonym przez
							organizatora i trwają zwykle około godzinę. Polegają
							one na wdrożeniu przygotowanych wcześniej zaleceń. W
							trakcie konsultacji opiekunowie dostaną informację
							zwrotną dotyczącą postępow w pracy z psem oraz
							ewentualne uwagi.
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
				<div className="bonePrice">
					<img
						className="boneImg"
						src={require("./photo/bone2.jpg")}
						alt={"Add more descriptive alt"}
					/>
					<div className="boneText">120 złotych</div>
				</div>
			</div>
		</div>
	);
}

export default NthBehConsultation;
