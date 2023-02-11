import Navigation from "./Navigation";
import Footer from "./Footer";
import Header from "./Header";
import IntroductionDesktop from "./IntroductionDesktop";
import IntroductionMobile from "./IntroductionMobile";
import OffertDesktop from "./OffertDesktop";
import OffertMobile from "./OffertMobile";
import TestimonialMobile from "./TestimonialMobile";
import TestimonialDesktop from "./TestimonialDesktop";
import { useEffect } from "react";
import AOS from "aos";
import React from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="App">
			<Navigation />

			<Header />

			<IntroductionDesktop />

			<IntroductionMobile />

			<OffertDesktop />

			<OffertMobile />

			<TestimonialDesktop />

			<TestimonialMobile />

			<Footer />
		</div>
	);
}
export default App;
