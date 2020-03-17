import React from 'react';
import foodList from '../../static/foods.JSON';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import { Link } from 'gatsby';
import ListItems from '../Components/listItems';

function Index() {
	let itemList = foodList.map((item) => {
		return (
			<ListItems
				foodList={foodList}
				item={item}
				key={Math.random()}
			/>
		);
	});

	return (
		<Container className="mainContainer">
			<Row className="justify-content-center">{itemList}</Row>
		</Container>
	);
}

export default Index;
