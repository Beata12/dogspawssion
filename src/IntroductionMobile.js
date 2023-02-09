import React, { useState } from "react";
import { Collapse } from "react-collapse";

export function IntroductionMobile() {
	const [elemToDisplay, setElemToDisplay] = useState(0);
	const handleElementToDisplay = (displayNr) => {
		setElemToDisplay(elemToDisplay === displayNr ? 0 : displayNr);
	};

	const [elemToDisplay2, setElemToDisplay2] = useState(0);
	const handleElementToDisplay2 = (displayNr2) => {
		setElemToDisplay2(elemToDisplay2 === displayNr2 ? 0 : displayNr2);
	};

	const [elemToDisplay3, setElemToDisplay3] = useState(0);
	const handleElementToDisplay3 = (displayNr3) => {
		setElemToDisplay3(elemToDisplay3 === displayNr3 ? 0 : displayNr3);
	};

	return (
		<div
			data-aos="zoom-in-up"
			data-aos-delay="200"
			data-aos-duration="1500"
			className="introduction-mobile"
		>
			<div>
				<div className="intro-txt">
					<div className="row">
						<h1>O MNIE?</h1>
					</div>
					<Collapse isOpened={elemToDisplay === 1}>
						<div id="app"></div>
						<div>
							Hej, nazywam się Klaudia i jestem certyfikowanym
							psim trenerem i behawiorystą oraz petsitterem a
							także dogoterapeutą. Stale podnoszę swoje
							kwalifikacje, biorąc udział w kursach i webinarach.
							Swoją przyszłość wiążę ze zwierzętami. Chce pomagać
							psom oraz ich opiekunom oraz szerzyć wiedzę o
							prawidłowym ich karmieniu, trenowaniu oraz, przede
							wszystkim wychowaniu.
							<br />
							<br />
							Pragnę aby wszystkie psy oraz ich opiekunowie byli
							szczęśliwi. Psy doskonale odczytują naszą mowę
							ciała, nasze gesty oraz emocje. W drugą stronę
							niestety jest trochę gorzej. Moim zadaniem, jest
							ukierunkowanie opiekunów na dobrą ścieżkę oraz
							pokazanie im, że poprzez zrozumienie psiego języka
							uszanowanie psich potrzeb można stworzyć silną więź
							pomiędzy psem a jego opiekunami i rozwiązać wszelkie
							problemy, które napotkali na swojej drodze.
						</div>
					</Collapse>
					<button
						className="offert-btn offert-styles btn btn-light "
						onClick={() => handleElementToDisplay(1)}
					>
						{elemToDisplay ? "Mniej" : "Więcej"}
					</button>
				</div>
				<div className="intro-txt">
					<h1>DOŚWIADCZENIE</h1>
					<Collapse isOpened={elemToDisplay2 === 1}>
						<div>
							<ul>
								<li>
									Dogoterapeuta/Kynoterapeuta
									<ul>
										<li>
											Placówka Kształcenia Ustawicznego.
											Instruktorskie Centrum Szkoleń
											"Green Way"
										</li>
										<li>NR 465/1/DOGO/GW/2018</li>
										<li>10.07.2018</li>
									</ul>
								</li>

								<li>
									Zoopsycholog/Behawiorysta - specjalizacja
									psy
									<ul>
										<li>
											Polska Akademia Zoopsychologii i
											Animaloterapii
										</li>
										<li>1111/ZOOP/PAZiA/GW/22</li>
										<li></li>
									</ul>
								</li>
								<li>
									Instruktor Szkolenia Psów (trener psów) -
									Stopień I + II
									<ul>
										<li>
											Polska Akademia Zoopsychologii i
											Animaloterapii
										</li>
										<li>2799/TRP/GW/PAZiA/2021</li>
										<li>25.08.2021</li>
									</ul>
								</li>

								<li>
									Petsitter
									<ul>
										<li>COAPE</li>
										<li></li>
										<li></li>
									</ul>
								</li>
							</ul>
						</div>
					</Collapse>
					<button
						className="offert-btn btn btn-light d-flex justify-content-center"
						onClick={() => handleElementToDisplay2(1)}
					>
						{elemToDisplay2 ? "Mniej" : "Więcej"}
					</button>
				</div>

				<div className="intro-txt">
					<h1>DLACZEGO DOG'S PAWSSION?</h1>
					<Collapse isOpened={elemToDisplay3 === 1}>
						<div>
							Od dziecka fascynowały mnie zwierzęta. Czułam się
							przy nich szczęśliwa i bezpieczna. Jako nastolatka
							dużo czasu spędzałam w schronisku dla psów,
							wyprowadzając psy, bawiąc się z nimi oraz
							rozmawiając z potencjalnymi rodzinami adopcyjnymi.
							Zdobyłam tam dużo doświadczenia, które przydaje mi
							się teraz, w pracy z klientami i ich czworonogami.
							<br />
							Pracując z psami wykorzystuje metody pozytywne.
							Sprawia to że trening dla psa jest przyjemnością, a
							nie przykrym obowiązkiem. Poprzez pozytywne
							podejście do psa zwiększa się również więź pomiędzy
							psem, a jego opiekunem.
						</div>
					</Collapse>
					<button
						className="offert-btn btn btn-light d-flex justify-content-center"
						onClick={() => handleElementToDisplay3(1)}
					>
						{elemToDisplay3 ? "Mniej" : "Więcej"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default IntroductionMobile;
