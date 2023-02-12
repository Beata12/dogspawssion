import React from "react";
function WhoAmI({ header }) {
	return (
		<div>
			<h1 className="text-lg-start ">{header}</h1>
			<p className="textAbout">
				Hej, nazywam się Klaudia i jestem certyfikowanym psim trenerem i
				behawiorystą oraz petsitterem, a także dogoterapeutą. Stale
				podnoszę swoje kwalifikacje biorąc udział w kursach i
				webinarach. Swoją przyszłość wiążę ze zwierzętami. Chce pomagać
				opiekunom i szerzyć wiedzę o prawidłowym karmieniu, trenowaniu,
				a przede wszystkim wychowaniu ich czworonogów.
				<br />
				<br />
				Pragnę aby wszystkie psy oraz ich opiekunowie byli szczęśliwi.
				Psy doskonale odczytują naszą mowę ciała, nasze gesty oraz
				emocje. W drugą stronę niestety jest trochę gorzej. Moim
				zadaniem, jest ukierunkowanie opiekunów na dobrą ścieżkę oraz
				pokazanie im, że poprzez zrozumienie psiego języka uszanowanie
				psich potrzeb można stworzyć silną więź pomiędzy psem a jego
				opiekunami i rozwiązać wszelkie problemy, które napotkali na
				swojej drodze.
			</p>
		</div>
	);
}

export default WhoAmI;
