import React from "react";

function BehConsultationMobile() {
	return (
		<div>
			<div className="container" id="behawioryzm-mobile">
				<div className="row konsultacje">
					<div className="col-5 dog-pic">
						<img
							className="dog-mobile"
							src={require("./photo/aka.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="col-7">
						<p className="font-bold hdr-mbl">
							Pierwsza konsultacja behawioralna
							<br />
							(on-site/stacjonarna)
						</p>
						<ul>
							<li className="font-bold">Cena: 150 PLN</li>
						</ul>
					</div>
					<div>
						<p className="txt-offert-mobile">
							Konsultacja odbywa się w miejscu przebywania psa, w
							jego naturalnym otoczeniu i trwa zwykle około 1,5
							godziny. W trakcie spotkania przeprowadzam wywiad z
							opiekunami oraz obserwuję zachowania psa w domu oraz
							podczas spaceru. Skupiam się na takich aspektach jak
							funkcjonowanie psa w domu, relacja z domownikami
							oraz innymi zwierzętami, stan zdrowia zwierzęcia z
							uwzględnieniem sposobu żywienia i codziennych
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

				<div className="row konsultacje">
					<div className="col-5 dog-pic">
						<img
							className="dog-mobile"
							src={require("./photo/aka.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="col-7">
						<p className="font-bold hdr-mbl">
							Kolejna konsultacja behawioralna
							<br />
							(on-site/stacjonarna)
						</p>
						<ul>
							<li className="font-bold">Cena: 120 PLN</li>
						</ul>
					</div>
					<div>
						<p className="txt-offert-mobile">
							Konsultacje odbywają się w miejscu wyznaczonym przez
							organizatora i trwają zwykle około godzinę. Polegają
							one na wdrożeniu przygotowanych wcześniej zaleceń. W
							trakcie konsultacji opiekunowie dostaną informację
							zwrotną dotyczącą postępow w pracy z psem oraz
							ewentualne uwagi.
						</p>
					</div>
				</div>

				<div className="row konsultacje">
					<div className="col-5 dog-pic">
						<img
							className="dog-mobile"
							src={require("./photo/aka.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="col-7">
						<p className="font-bold hdr-mbl">
							Pierwsza konsultacja behawioralna (online)
						</p>
						<ul>
							<li className="font-bold">Cena: 100 PLN</li>
						</ul>
					</div>
					<div>
						<p className="txt-offert-mobile">
							Konsultacja odbywa się online na platformie Zoom i
							trwa zwykle około 1,5 godziny. W trakcie spotkania
							przeprowadzam wywiad z opiekunami oraz obserwację
							zachowania psa na podstawie nagrań wysłanych przez
							opiekunów. Skupiam się na takich aspektach jak
							funkcjonowanie psa w domu, relacja z domownikami
							oraz innymi zwierzętami, stan zdrowia zwierzęcia z
							uwzględnieniem sposobu żywienia i codziennych
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

				<div className="row konsultacje">
					<div className="col-5 dog-pic">
						<img
							className="dog-mobile"
							src={require("./photo/aka.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
					<div className="col-7">
						<p className="font-bold hdr-mbl">
							Kolejna konsultacja behawioralna (online)
						</p>
						<ul>
							<li className="font-bold">Cena: 90 PLN</li>
						</ul>
					</div>
					<div>
						<p className="txt-offert-mobile">
							Konsultacje odbywają się w miejscu wyznaczonym przez
							organizatora i trwają zwykle około godzinę. Polegają
							one na wdrożeniu przygotowanych wcześniej zaleceń. W
							trakcie konsultacji opiekunowie dostaną informację
							zwrotną dotyczącą postępow w pracy z psem oraz
							ewentualne uwagi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BehConsultationMobile;
