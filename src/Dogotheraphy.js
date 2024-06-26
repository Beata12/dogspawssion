import React from "react";

function Dogotheraphy() {
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
					<div className="col-lg-8 txt-align">
						<p className="head-txt">Dogoterapia</p>
						<div
							className="d-flex justify-content-center info-soon"
							data-aos="zoom-out-down"
							data-aos-delay="100"
							data-aos-duration="2000"
						>
							Informacje wkrótce
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dogotheraphy;
