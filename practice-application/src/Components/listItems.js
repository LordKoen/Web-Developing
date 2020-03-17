import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import '../pages/index.css';
import { Link } from 'gatsby';

function ListItems(props) {
	let linkTo = '/' + props.item.path;
	return (
		<Col key={Math.random()} xs="12" className="item">
			<Link to={linkTo} className="itemDiv">
				<div className="leftItem">
					<div className="text">{props.item.title}</div>
					<div className="text">{props.item.price} </div>
				</div>
				<div>
					<div className="text">{props.item.shortDesc}</div>
					<div>
						{props.item.isVegan ? (
							<span id="green">Vegan</span>
						) : (
							<span id="red">Not Vegan</span>
						)}
					</div>
				</div>
			</Link>
		</Col>
	);
}

export default ListItems;
