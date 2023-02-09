import React from "react";

function OffertCategory() {
	return (
		<div className="row">
			<div className="col-lg-3 beh-pic" id="div-beh">
				<div>
					<img
						className="beh-img"
						src={require("./photo/dog-beh.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="ofert">
					KONSULTACJE BEHAWIRRALNE
					<button>Więcej</button>
				</div>
			</div>
			<div className="col-lg-3 beh-pic" id="div-ind">
				<div>
					<img
						className="beh-img"
						src={require("./photo/dog-beh.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="ofert">
					SZKOLENIA <button>Więcej</button>
				</div>
				<div></div>
			</div>
			<div className="col-lg-3 beh-pic" id="div-szk">
				<div>
					<img
						className="beh-img"
						src={require("./photo/dog-beh.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="ofert">
					SPACERY SOCJALIZACYJNE <button>Więcej</button>
				</div>
			</div>
			<div className="col-lg-3 beh-pic" id="div-szk">
				<div>
					<img
						className="beh-img"
						src={require("./photo/dog-beh.jpg")}
						alt={"Add more descriptive alt"}
					/>
				</div>
				<div className="ofert">
					DODATKOWE USŁUGI <button>Więcej</button>
				</div>
			</div>
		</div>
	);
}

export default OffertCategory;
