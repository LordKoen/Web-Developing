import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import '../pages/index.css';
import { Link } from 'gatsby';
import Card from 'react-bootstrap/Card';

function ListItems(props) {
	let linkTo = '/' + props.item.slug;
	return (
		<Col key={Math.random()} xs="12" className="item">
			<Link to={linkTo} className="itemDiv">
				<section className="leftItem">
					<span>{props.item.title}</span>
					<span>{props.item.price} </span>
				</section>
				<section>
					<div className="text">{props.item.shortDesc}</div>
					<div>
						{props.item.isVegan ? (
							<span id="green">Vegan</span>
						) : (
							<span id="red">Not Vegan</span>
						)}
					</div>
				</section>
			</Link>
		</Col>
	);
}

export default ListItems;
