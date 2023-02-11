import React from "react";

function TestimonialMobile() {
	return (
		<div className="container-mobile-testimonial">
			<div>
				<h1 className="think-text fw-bold">CO INNI O MNIE MYŚLĄ?</h1>
			</div>
			<div className="testimonial-container">
				<div
					className="testimonial-frame"
					// data-aos="flip-up"
					// data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center fw-bold testim-name text-uppercase">
						Karolina
					</div>
					<div className="d-flex justify-content-center">
						<img
							src="https://i1.kwejk.pl/k/obrazki/2012/02/588521b42484804d9feb557abf3f2443.jpg"
							className="profile"
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="testimonial">
						Byliśmy u Pani Klaudi na szkoleniu z pieskiem. To
						świetna sprawa, właścieciel uczy się zrozumienia swojego
						psa, a pies uczy sie jak bardziej rozumiec własciciela.
						Polecam kążdemu kto chce wiedzieć wiecej co chodzi po
						głowie jego pupilowi.
					</div>
				</div>
				<div
					className="testimonial-frame"
					// data-aos="flip-up"
					// data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center fw-bold testim-name text-uppercase">
						Kamila
					</div>
					<div className="d-flex justify-content-center">
						<img
							src="https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2021/10/shutterstock_1192439101-1-768x512.jpg"
							className="profile"
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="testimonial">
						Pani Dorota jako osoba, która juz od paru lat pracuje z
						psami może pochwalić się doświadczeniem i wie co jest
						dobre dla konkretnego psa!
					</div>
				</div>
				<div
					className="testimonial-frame"
					// data-aos="flip-up"
					// data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center fw-bold testim-name text-uppercase">
						Pawel
					</div>
					<div className="d-flex justify-content-center">
						<img
							src="data:image/jpeg;base64,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"
							className="profile"
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="testimonial">
						Z czystym sercem polecam, pies zaczął słuchać! Pani
						Klaudia ma mega super podejscie!
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialMobile;
