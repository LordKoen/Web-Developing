import React from 'react';
import foodList from '../../static/foods.JSON';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../pages/index.css';
import { Link } from 'gatsby';

function ListItems(props) {
	let linkTo = '/' + props.item.title;
	return (
		<Col key={Math.random()} xs="12" className="item">
			<Link to={linkTo} className="itemDiv">
				<div className="leftItem">
					<div className="center">{props.item.title}</div>
					<div className="center">{props.item.price} </div>
				</div>
				<div>
					<div className="desc">{props.item.shortDesc}</div>
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
