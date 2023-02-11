import React from "react";

function Navigation() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm background-color"
			data-aos="fade-down"
			data-aos-delay="50"
			data-aos-duration="1000"
		>
			<div className="container px-5 line-height">
				<a className="ms-4 " href="#page-top">
					<img
						src={require("./photo/logo.png")}
						className={"logo-size"}
						alt={"Logo"}
					/>
				</a>
				{/* <<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu
					<i className="bi-list"></i>
				</button>> */}

				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#about">
								O mnie
							</a>
						</li>
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#ofert">
								Oferta
							</a>
						</li>
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#contact">
								Kontakt
							</a>
						</li>
						<li className="nav-item">
							<div className="ig">
								<a
									className="social-icon col-lg-4"
									href="https://www.instagram.com/dogspawssion/"
									target="blank"
								>
									<i className="fa fa-instagram instagram"></i>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
