import React from "react";
function Header() {
	return (
		<header
			className="header-background"
			data-aos="fade-down"
			data-aos-delay="50"
			data-aos-duration="1000"
		>
			<div className="box-desktop">
				<div className="header-text">
					Cześć, nazywam się Klaudia <br />i pomogę Ci
					<br />
					zrozumieć Twojego psa!
					<br />
				</div>
			</div>
			<div
				className="tlo"
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="1000"
			></div>
		</header>
	);
}

export default Header;
