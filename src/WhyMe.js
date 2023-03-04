import React from "react";
function WhyMe({ header }) {
	return (
		<div>
			<h1 className="text-lg-start header-txt">{header}</h1>
			<p className="textAbout">
				Od dziecka fascynowały mnie zwierzęta. Czułam się przy nich
				szczęśliwa i bezpieczna. Jako nastolatka dużo czasu spędzałam w
				schronisku dla psów, wyprowadzając psy, bawiąc się z nimi oraz
				rozmawiając z potencjalnymi rodzinami adopcyjnymi. Zdobyłam tam
				dużo doświadczenia, które przydaje mi się teraz, w pracy z
				klientami i ich czworonogami.
				<br />
				Pracując z psami wykorzystuje metody pozytywne. Sprawia to, że
				trening dla psa jest przyjemnością, a nie przykrym obowiązkiem.
				Poprzez pozytywne podejście do psa wzmacnia się również więź
				pomiędzy psem, a jego opiekunem.
			</p>
		</div>
	);
}

export default WhyMe;
