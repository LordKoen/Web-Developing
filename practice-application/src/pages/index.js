import React, { useState, useEffect } from 'react';
import foodList from '../../foods.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './index.css';
import ListItems from '../Components/listItems';
import Cart from '../Components/cart';

function Index() {
	const [ cart, setCart ] = useState([]);

	useEffect(
		() => {
			console.log(cart);
		},
		[ cart ]
	);

	function handleClick(event) {
		const { id, title } = event.currentTarget;
		const price = event.target.getAttribute('price');

		console.log(id);
		console.log(title);
		console.log(price);

		setCart((prevState) => {
			return [ ...prevState, {
				title: title,
				price: price,
				id: id
			} ];
		});
	}

	let itemList = foodList.map((item) => {
		return (
			<ListItems
				foodList={foodList}
				item={item}
				key={item.id}
				handleClick={handleClick}
				id={item.id}
			/>
		);
	});

	return (
		<Container className="mainContainer">
			{itemList}
			{cart.length === 0 ? null : <Cart items={cart} />}
		</Container>
	);
}

export default Index;
