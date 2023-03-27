import React from "react";
// import MyMap from "./MyMap";

function Location() {
	return (
		<div className="text-center py-3" id="location">
			<div className="container footerBox location-box ">
				<div>
					<h1 className="footer-contact">lokalizacja</h1>
					<div className="">
						<div>
							<div>
								<h3 className="footer-text">
									Trójmiasto, małe trójmiasto i okolice
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mapouter">
				<div className="gmap_canvas">
					<iframe
						title="tricity"
						width="1000"
						height="380"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=ma%C5%82e%20tr%C3%B3jmiasto&t=&z=9&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default Location;
