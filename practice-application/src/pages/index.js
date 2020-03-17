import React from 'react';
import foodList from '../../foods.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.css';
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
			{itemList}
		</Container>
	);
}

export default Index;
