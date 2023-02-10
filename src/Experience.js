import React, { useState } from "react";
import { Collapse } from "react-collapse";
import MoreExperience from "./MoreExperience";

function Experience({ header }) {
	return (
		<div>
			<h1 className="text-lg-start mb-4 text-margin-top">{header}</h1>
			<div className="d-flex flex-column flex-md-row justify-content-between mb-1">
				<div className="flex-grow-1">
					<h3 className="mb-0">Kynoterapeuta(Dogoterapeuta)</h3>
					<div className="subheading mb-3">
						“Green Way” - Centrum Szkoleń Instruktorskich
					</div>
				</div>
				<div className=" text-start">
					<span className="">Nr licencji: 349/1/dogo/gw/2018</span>
				</div>
			</div>
			<div className="d-flex flex-column flex-md-row justify-content-between mb-1">
				<div className="flex-grow-1">
					<h3 className="mb-0">Petsitter</h3>
					<div className="subheading mb-3">COAPE</div>
				</div>
				<div className="text-start">
					<span className="">Nr licencji: 989</span>
				</div>
			</div>
			<div className="d-flex flex-column flex-md-row justify-content-between">
				<div className="flex-grow-1">
					<h3 className="mb-0">
						Instruktor Szkolenia Psówr
						<br />
						Trener Psów Stopień I + II
					</h3>
					<div className="subheading mb-3">
						Polska Akademia Zoopsychologii i Animaloterapii <br />
						Polska Akademia Trenerów i Instruktorów Sportu Green Way
					</div>
				</div>
				<div className="flex-shrink-0">
					<span className="">Nr licencji: 542/TRP/GW/PAZiA/2021</span>
				</div>
			</div>
			<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div className="flex-grow-1">
					<h3 className="mb-0">
						Zoopsycholog/Behawiorysta <br />
						Specjalizacja psy
					</h3>
					<div className="subheading mb-3">
						Polska Akademia Zoopsychologii i Animaloterapii
						<br /> Polska Akademia Trenerów i Instruktorów Sportu
						Green Way
					</div>
				</div>
				<div className="flex-shrink-0">
					<span className="">Nr licencji: 503/ZOOP/PAZIA/GW/22</span>
				</div>
			</div>
		</div>
	);
}

export default Experience;
