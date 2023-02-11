import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Footer() {
	return (
		<footer className="text-center py-5" id="contact">
			<div className="container footerBox">
				<div>
					<h1 className="footer-contact">kontakt</h1>

					<div className="">
						<div>
							<div>
								<h3 className="footer-text">
									Coś jest nie jasnę, masz jakieś wątpliwości
									lub pytania? <br /> Kliknij na poniższe
									ikony, skopiuj mój numer/e-mail. <br />
									Skontaktuj się ze mną, a ja wszystko Ci
									wytłumaczę!
								</h3>
							</div>
							<CopyToClipboard text="790-592-460">
								<i
									class="fa fa-phone kontact-size fa-3x"
									title="skopiuj numer telefonu"
								></i>
							</CopyToClipboard>

							<CopyToClipboard text="klaudia.marek.11@gmail.com">
								<i
									class="fa fa-envelope kontact-size fa-3x"
									title="skopiuj e-mail"
								></i>
							</CopyToClipboard>
						</div>
					</div>

					<h3 className="footer-text">
						Wypełnij formularz i umówmy się <br />
						na nasze pierwsze spotkanie:
					</h3>
					<div className="">
						<a
							className=""
							href="https://docs.google.com/forms/d/1tx2ZppHJzn_NOtAXJ-eHPVW3cd7_jl_J-xoo9Z5Tokk/viewform?fbclid=IwAR31p6VL-_GxTjSt0Ne1vjTVNNRHYcHthiVTvRavT3POGXqAtWZJ02oZCic&edit_requested=true"
							target="blank"
						>
							<button className=" btn-footer btn-lg text-lowercase">
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