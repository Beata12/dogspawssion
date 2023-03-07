import React from "react";

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
									Słupsk i okolice <br />
									Wejherowo i okolice
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mapouter">
				<div className="gmap_canvas">
					<iframe
						width="1080"
						height="445"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=S%C5%82upsk&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default Location;
