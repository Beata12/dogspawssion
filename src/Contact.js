import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const handleEmojiClick = () => {
	window.location.href = "mailto:klaudiamarek11@gmail.com ";
};

function Contack() {
	return (
		<div className="text-center py-3" id="contact">
			<div className="container footerBox ">
				<div>
					<h1 className="footer-contact">kontakt</h1>
					<div className="">
						<div>
							<div>
								<h3 className="footer-text">
									Masz jakieś wątpliwości lub pytania? <br />
									Kliknij na poniższe ikony, skopiuj mój
									numer/e-mail. <br />
									Skontaktuj się ze mną, a ja wszystko
									wytłumaczę!
								</h3>
							</div>
							<CopyToClipboard text="790-592-460">
								<i
									className="fa fa-phone kontact-size fa-3x desktopContact"
									title="skopiuj numer telefonu"
								></i>
							</CopyToClipboard>

							<CopyToClipboard text="klaudiamarek11@gmail.com">
								<i
									className="fa fa-envelope kontact-size fa-3x desktopContact"
									title="skopiuj e-mail"
								></i>
							</CopyToClipboard>
							<span
								className="mobileContact"
								role="img"
								aria-label="Email"
								onClick={handleEmojiClick}
							>
								<i className="fa fa-envelope kontact-size fa-3x"></i>
							</span>
							<a className="mobileContact" href="tel:790-592-460">
								<i className="fa fa-phone kontact-size fa-3x"></i>
							</a>
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
		</div>
	);
}

export default Contack;
