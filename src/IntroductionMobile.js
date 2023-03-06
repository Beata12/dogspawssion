import React, { useState } from "react";
import { Collapse } from "react-collapse";
import MoreExperience from "./MoreExperience";

export function IntroductionMobile() {
	const [elemToDisplay0, setElemToDisplay0] = useState(0);
	const handleElementToDisplay0 = (displayNr0) => {
		setElemToDisplay0(elemToDisplay0 === displayNr0 ? 0 : displayNr0);
	};

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
		<div id="offert">
			<div
				data-aos="zoom-in-up"
				data-aos-delay="200"
				data-aos-duration="1500"
				className="introduction-mobile"
			>
				<div>
					<div className="intro-txt">
						<div className="row">
							<h1 className="introHead fw-bold">O MNIE</h1>

							<Collapse isOpened={elemToDisplay === 1}>
								<div id="app"></div>
								<div className="intro-txt-info">
									Hej, nazywam się Klaudia i jestem
									certyfikowanym psim trenerem i behawiorystą
									oraz petsitterem a także dogoterapeutą.
									Stale podnoszę swoje kwalifikacje, biorąc
									udział w kursach i webinarach. Swoją
									przyszłość wiążę ze zwierzętami. Chce
									pomagać psom oraz ich opiekunom oraz szerzyć
									wiedzę o prawidłowym ich karmieniu,
									trenowaniu oraz, przede wszystkim
									wychowaniu.
									<br />
									<br />
									Pragnę aby wszystkie psy oraz ich
									opiekunowie byli szczęśliwi. Psy doskonale
									odczytują naszą mowę ciała, nasze gesty oraz
									emocje. W drugą stronę niestety jest trochę
									gorzej. Moim zadaniem, jest ukierunkowanie
									opiekunów na dobrą ścieżkę oraz pokazanie
									im, że poprzez zrozumienie psiego języka
									uszanowanie psich potrzeb można stworzyć
									silną więź pomiędzy psem a jego opiekunami i
									rozwiązać wszelkie problemy, które napotkali
									na swojej drodze.
								</div>
							</Collapse>
							<div className="d-flex justify-content-center">
								<button
									className="offert-btn btn btn-light "
									onClick={() => handleElementToDisplay(1)}
								>
									{elemToDisplay ? "Mniej" : "Więcej"}
								</button>
							</div>
						</div>
					</div>
					<div className="intro-txt">
						<h1 className="introHead fw-bold">DOŚWIADCZENIE</h1>
						<Collapse isOpened={elemToDisplay2 === 1}>
							<div className="intro-txt-info">
								<ul>
									<li>
										<p className="fw-bold">
											Dogoterapeuta/Kynoterapeuta
										</p>
										<ul>
											<li>
												Placówka Kształcenia
												Ustawicznego. Instruktorskie
												Centrum Szkoleń "Green Way"
											</li>
											<li>
												Nr licencji: 349/1/dogo/gw/2018
											</li>
										</ul>
									</li>

									<li>
										<p className="fw-bold">
											Zoopsycholog/Behawiorysta -
											specjalizacja psy
										</p>
										<ul>
											<li>
												Polska Akademia Zoopsychologii i
												Animaloterapii <br />
												Polska Akademia Trenerów i
												Instruktorów Sportu Green Way
											</li>
											<li>
												Nr licencji:
												542/TRP/GW/PAZiA/2021
											</li>
											<li></li>
										</ul>
									</li>
									<li>
										<p className="fw-bold">
											Instruktor Szkolenia Psów (trener
											psów) - Stopień I + II
										</p>
										<ul>
											<li>
												Polska Akademia Zoopsychologii i
												Animaloterapii <br />
												Polska Akademia Trenerów i
												Instruktorów Sportu Green Way
											</li>
											<li>
												Nr licencji:
												542/TRP/GW/PAZiA/2021
											</li>
										</ul>
									</li>

									<li>
										<p className="fw-bold">Petsitter</p>
										<ul>
											<li>COAPE</li>
											<li>Nr licencji: 989</li>
										</ul>
									</li>
								</ul>
							</div>
							<Collapse isOpened={elemToDisplay0 === 1}>
								<div
									className="container offert-container"
									id="behawioryzm"
								>
									<MoreExperience />
								</div>
							</Collapse>
							<div className="d-flex justify-content-center">
								<button
									className="offert-btn offert-btn-mbl btn btn-light "
									onClick={() => handleElementToDisplay0(1)}
								>
									{elemToDisplay0
										? "Mniej"
										: "Inne kursy i szkolenia"}
								</button>
							</div>
						</Collapse>
						<div className="d-flex justify-content-center">
							<button
								className="offert-btn btn btn-light "
								onClick={() => handleElementToDisplay2(1)}
							>
								{elemToDisplay2 ? "Mniej" : "Więcej"}
							</button>
						</div>
					</div>

					<div className="intro-txt">
						<h1 className="introHead fw-bold">
							DOGS<strong className="paw">PAW</strong>SSION
						</h1>
						<Collapse isOpened={elemToDisplay3 === 1}>
							<div className="intro-txt-info">
								Od dziecka fascynowały mnie zwierzęta. Czułam
								się przy nich szczęśliwa i bezpieczna. Jako
								nastolatka dużo czasu spędzałam w schronisku dla
								psów, wyprowadzając psy, bawiąc się z nimi oraz
								rozmawiając z potencjalnymi rodzinami
								adopcyjnymi. Zdobyłam tam dużo doświadczenia,
								które przydaje mi się teraz, w pracy z klientami
								i ich czworonogami.
								<br />
								Pracując z psami wykorzystuje metody pozytywne.
								Sprawia to że trening dla psa jest
								przyjemnością, a nie przykrym obowiązkiem.
								Poprzez pozytywne podejście do psa zwiększa się
								również więź pomiędzy psem, a jego opiekunem.
							</div>
						</Collapse>
						<div className="d-flex justify-content-center">
							<button
								className="offert-btn btn btn-light "
								onClick={() => handleElementToDisplay3(1)}
							>
								{elemToDisplay3 ? "Mniej" : "Więcej"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IntroductionMobile;
