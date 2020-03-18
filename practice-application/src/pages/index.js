import React, { useState, useEffect } from 'react';
import foodList from '../../foods.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './index.css';
import ListItems from '../Components/listItems';
import Cart from '../Components/cart';

function Index() {
	const [ cart, setCart ] = useState([]);
	const [ cartQuantity, setCartQuantity ] = useState(() => {
		const initialState = cartQuantityInitialise();
		return initialState;
	});
	const [ total, setTotal ] = useState(0);

	useEffect(
		() => {
			console.log('cart', cart);
			console.log('cartQuantity', cartQuantity);
			console.log('total', total);
		},
		[ cart, cartQuantity, total ]
	);

	function cartQuantityInitialise() {
		let intialState = foodList.map((item) => {
			return {
				id: item.id,
				quantity: 0,
				price: item.price
			};
		});
		return intialState;
	}

	function handleClick(event) {
		const { id, title } = event.currentTarget;
		const price = event.target.getAttribute('price');

		setCartQuantity((prevState) => {
			let currentItem = prevState.find((item) => item.id == id);
			let newValue = currentItem.quantity++;
			console.log('currentItem', currentItem);
			console.log('newValue', newValue);
			return [ ...prevState ];
		});

		setCart((prevState) => {
			return [
				...prevState,
				{
					title: title,
					price: price,
					id: id
				}
			];
		});

		setTotal((prevState) => {
			return prevState + +price.slice(1);
		});
	}

	function deleteitem(event) {
		const { id, title } = event.currentTarget;
		const price = event.target.getAttribute('price');

		setCartQuantity((prevState) => {
			let currentItem = prevState.find((item) => item.id == id);
			let newValue = currentItem.quantity--;
			return [ ...prevState ];
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
			{cart.length === 0 ? null : (
				<Cart cart={cart} quantity={cartQuantity} total={total} />
			)}
		</Container>
	);
}

export default Index;
