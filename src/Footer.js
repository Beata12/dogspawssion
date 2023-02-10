import React from "react";

function Footer() {
	return (
		<footer className="text-center py-5" id="contact">
			<div className="container">
				<div>
					<h1>Skontaktuj się ze mną</h1>

					<div className="">
						<ul>
							<li className="head-txt">
								Klaudia.marek.11@gmail.com
							</li>
							<li className="head-txt">790-592-460</li>
						</ul>
					</div>

					<h1>
						Wypełnij formularz i umówmy się na nasze pierwsze
						spotkanie:
					</h1>
					<div className="">
						<a
							className=""
							href="https://docs.google.com/forms/d/1tx2ZppHJzn_NOtAXJ-eHPVW3cd7_jl_J-xoo9Z5Tokk/viewform?fbclid=IwAR31p6VL-_GxTjSt0Ne1vjTVNNRHYcHthiVTvRavT3POGXqAtWZJ02oZCic&edit_requested=true"
							target="blank"
						>
							<button className="btn btn-success">
								Formularz
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="container px-5">
				<div className="text-white-50 small">
					<div className="mb-2">
						&copy; Your Website 2022. All Rights Reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
