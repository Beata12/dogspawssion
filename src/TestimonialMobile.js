import React from "react";

function TestimonialMobile() {
	return (
		<div className="container-mobile-testimonial">
			<div>
				<h1 className="think-text fw-bold">CZWORONOŻNI KLIENCI</h1>
			</div>
			<div className="testimonial-container">
				<div
					className="testimonial-frame"
					// data-aos="flip-up"
					// data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center fw-bold testim-name text-uppercase">
						Rocky
					</div>
					<div className="d-flex justify-content-center">
						<img
							className="profile"
							src={require("./photo/rocky.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="testimonial">
						Pani Klaudia pomogła nam zrozumieć jak wymagającą rasę
						wzieliśmy pod nasz dach. Wytłumaczyła nam, że mimo
						małego rozmiaru, Rocky nadal potrzebuje dużo ruchu i
						stymulacji umysłowej. Wprowadziliśmy zabawki węchowe i
						psiak jest dużo szczęśliwszy. Dziękujemy!
					</div>
				</div>
				<div
					className="testimonial-frame"
					// data-aos="flip-up"
					// data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center fw-bold testim-name text-uppercase">
						Michael
					</div>
					<div className="d-flex justify-content-center">
						<img
							className="profile"
							src={require("./photo/michael2.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="testimonial">
						Byliśmy tutaj na szkoleniu z Michaelem. Klaudia świetnie
						wytłumaczyła jakie błędy popełniamy i jak możemy to
						poprawić! Bardzo polecamy ją kążdemu kto chce polepszyc
						dobrobyt swojego psiaka
						<span role="img" aria-label="">
							🙂
						</span>
					</div>
				</div>
				<div
					className="testimonial-frame"
					// data-aos="flip-up"
					// data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center fw-bold testim-name text-uppercase">
						Aza
					</div>
					<div className="d-flex justify-content-center">
						<img
							className="profile"
							src={require("./photo/aza2.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="testimonial">
						Pani Klaudia pomogła mi przygotować się na nowego
						członka rodziny. Dzięki niej byłem spokojnieszy, kiedy
						dołączyła do nas Aza.
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialMobile;
