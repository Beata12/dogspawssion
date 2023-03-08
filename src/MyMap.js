// import React from "react";
// import { Marker, useLoadScript, GoogleMap } from "google-maps-react";

// export default function MyMap() {
// 	const { isLoaded } = useLoadScript({
// 		gogleMapsApiKey: "AIzaSyAKl7km4mU9lHSGqMR-jLYJDB5unXEdxsI",
// 	});
// 	if (!isLoaded) return <div>Loading...</div>;
// 	return <MapG />;
// }

// function MapG() {
// 	return (
// 		<GoogleMap
// 			zoom={10}
// 			center={{ lat: 0, lng: -80 }}
// 			mapContainerClassName=""
// 		></GoogleMap>
// 	);
// }

// 	return (
// 		<div>
// 			<Map google={this.props.google} zoom={14}>
// 				<Marker
// 					onClick={this.onMarkerClick}
// 					name={"Current location"}
// 				/>

// 				<InfoWindow onClose={this.onInfoWindowClose}>
// 					<div>
// 						<h1>{this.state.selectedPlace.name}</h1>
// 					</div>
// 				</InfoWindow>
// 			</Map>
// 		</div>
// 	);
// }

// export default GoogleApiWrapper({
// 	apiKey: "AIzaSyAKl7km4mU9lHSGqMR-jLYJDB5unXEdxsI",
// })(MyMap);
