import React from 'react';
import foodList from '../../static/foods.JSON';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import { Link } from 'gatsby';

function Index() {
	let itemList = foodList.map((item) => {
		return (
			<Col key={Math.random()} xs="12" className="item">
				<Link to={item.title} className="clickable">
					<div className="center">{item.title}</div>
					<div className="center">{item.price} </div>
				</Link>
			</Col>
		);
	});

	return (
		<Container className="mainContainer">
			<Row className="justify-content-center">{itemList}</Row>
		</Container>
	);
}

export default Index;
