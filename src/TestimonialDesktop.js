import React from "react";

function TestimonialDesktop() {
	return (
		<div className="container-desktop-testimonial">
			<div className="testimontail-side">
				<div>
					<h1 className="what-they-think">CZWORONOŻNI KLIENCI</h1>
				</div>
				<div className="row">
					<div className="col-lg-4 box-my" id="karolina">
						<div
							className="card-transformation"
							data-aos="flip-up"
							data-aos-delay="100"
							data-aos-duration="1500"
						>
							<div
								className="face front-face"
								id="front-testimonial"
							>
								<img
									className="profile"
									src={require("./photo/rocky.jpg")}
									alt={"Add more descriptive alt"}
								/>
								<div className="text-uppercase name-opinion	">
									Rocky
								</div>
							</div>
							<div className="face back-face">
								<span className="fa fa-quote-left"></span>
								<div className="testimonial">
									Pani Klaudia pomogła nam zrozumieć jak
									wymagającą rasę wzieliśmy pod nasz dach.
									Wytłumaczyła nam, że mimo małego rozmiaru,
									Rocky nadal potrzebuje dużo ruchu i
									stymulacji umysłowej. Wprowadziliśmy zabawki
									węchowe i psiak jest dużo szczęśliwszy.
									Dziękujemy!
								</div>
								<span className="fa fa-quote-right"></span>
							</div>
						</div>
					</div>
					<div
						className="col-lg-4 box-my"
						data-aos="flip-up"
						data-aos-delay="100"
						data-aos-duration="1500"
					>
						<div className="card-transformation">
							<div className="face front-face">
								<img
									className="profile"
									src={require("./photo/michael2.jpg")}
									alt={"Add more descriptive alt"}
								/>
								<div className="text-uppercase name-opinion">
									Michael
								</div>
							</div>
							<div className="face back-face">
								<span className="fa fa-quote-left"></span>
								<div className="testimonial">
									Byliśmy tutaj na szkoleniu z Michaelem.
									Klaudia świetnie wytłumaczyła jakie błędy
									popełniamy i jak możemy to poprawić! Bardzo
									polecamy ją kążdemu kto chce polepszyc
									dobrobyt swojego psiaka
									<span role="img" aria-label="">
										🙂
									</span>
								</div>
								<span className="fa fa-quote-right"></span>
							</div>
						</div>
					</div>
					<div
						className="col-lg-4 box-my"
						data-aos="flip-up"
						data-aos-delay="100"
						data-aos-duration="1500"
					>
						<div className="card-transformation">
							<div className="face front-face">
								<img
									className="profile"
									src={require("./photo/aza2.jpg")}
									alt={"Add more descriptive alt"}
								/>
								<div className="text-uppercase name-opinion">
									Aza
								</div>
							</div>
							<div className="face back-face">
								<span className="fa fa-quote-left"></span>
								<div className="testimonial">
									Pani Klaudia pomogła mi przygotować się na
									nowego członka rodziny. Dzięki niej byłem
									spokojnieszy, kiedy dołączyła do nas Aza.
								</div>
								<span className="fa fa-quote-right"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialDesktop;
