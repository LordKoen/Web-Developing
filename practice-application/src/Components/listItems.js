import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import '../pages/index.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';

function ListItems(props) {
	let linkTo = '/' + props.item.slug;
	return (
		<Row>
			<Col key={Math.random()} xs="12" className="item">
				<Link to={linkTo} className="itemDiv">
					<Col className="leftItem">
						<span>{props.item.title}</span>
						<span>{props.item.price} </span>
					</Col>
					<Col>
						<div className="text">{props.item.shortDesc}</div>
						<div>
							{props.item.isVegan ? (
								<span id="green">Vegan</span>
							) : (
								<span id="red">Not Vegan</span>
							)}
						</div>
					</Col>
				</Link>
				<Button
					variant="outline-primary"
					size="sm"
					xs="3"
					className="button"
					onClick={props.handleClick}
					id={props.id}
					title={props.item.title}
					price={props.item.price}
				>
					Buy
				</Button>
			</Col>
		</Row>
	);
}

export default ListItems;
