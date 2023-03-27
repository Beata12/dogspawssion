import React from "react";
function WhoAmI({ header }) {
	return (
		<div>
			<h1 className="text-lg-start header-txt">{header}</h1>
			<p className="textAbout">
				Hej, nazywam się Klaudia. <br />
				Jestem certyfikowanym psim trenerem, behawiorystą, petsitterem i
				dogoterapeutą. Stale podnoszę swoje kwalifikacje biorąc udział w
				kursach i webinarach. Swoją przyszłość wiążę ze zwierzętami.
				Chce pomagać opiekunom i poszerzać ich wiedzę o prawidłowym
				karmieniu, trenowaniu, a przede wszystkim wychowaniu ich
				czworonogów.
				<br />
				Pragnę aby wszystkie psy oraz ich opiekunowie byli szczęśliwi.
				Psy doskonale odczytują naszą mowę ciała, nasze gesty i emocje.
				W drugą stronę niestety jest trochę trudniej. Moim zadaniem,
				jest ukierunkowanie opiekunów na dobrą ścieżkę oraz pokazanie
				im, że poprzez zrozumienie psiego języka, uszanowanie psich
				potrzeb można stworzyć silną więź pomiędzy psem a jego
				opiekunami i rozwiązać wszelkie problemy, które napotkali na
				swojej drodze.
			</p>
		</div>
	);
}

export default WhoAmI;
