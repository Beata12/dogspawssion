import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg bcg-nav">
			<div className="container">
				<a className="ms-4">
					<img
						src={require("./photo/logo.png")}
						className={"logo-size"}
						alt={"Logo"}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon menu-mbl"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#about">
								O mnie
							</a>
						</li>
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#offert">
								Oferta
							</a>
						</li>
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#contact">
								Kontakt
							</a>
						</li>
						<li className="nav-item">
							<a className="me-lg-3 nav-color" href="#location">
								Lokalizacja
							</a>
						</li>
						<li className="nav-item">
							<div className="">
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
