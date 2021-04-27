import React from "react";

//create your first component
export function Card() {
	return (
		<div className="card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export function Cardx4() {
	return (
		<div className="row mb-4">
			<div className="col-sm-3"> {Card()} </div>
			<div className="col-sm-3"> {Card()} </div>
			<div className="col-sm-3"> {Card()} </div>
			<div className="col-sm-3"> {Card()} </div>
		</div>
	);
}

export default Card;
