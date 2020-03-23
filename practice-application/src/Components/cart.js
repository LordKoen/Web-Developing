import React from 'react';
import Card from 'react-bootstrap/Card';
import layoutStyles from './layout.module.css';
import Button from 'react-bootstrap/Button';

function Cart(props) {
	const filteredArr = Array.from(
		new Set(props.cart.map((item) => item.id))
	).map((id) => {
		return {
			id: id,
			title: props.cart.find((item) => item.id === id).title,
			price: props.cart.find((item) => item.id === id).price
		};
	});

	let items = filteredArr.map((item) => {
		let currentQuantity = props.quantity.find(
			(quant) => +quant.id === +item.id
		);
		return (
			<Card.Text
				key={Math.random()}
				className={layoutStyles.cartContainer}
			>
				<span style={{ display: 'block' }}>
					{item.title}
					<Button
						size="sm"
						className={layoutStyles.button}
						variant="outline-primary"
						onClick={props.delete}
						id={item.id}
						price={item.price}
					>
						Remove
					</Button>
				</span>
				<span>{item.price}</span>
				<span className={layoutStyles.floatRight}>
					{currentQuantity.quantity}
				</span>
			</Card.Text>
		);
	});

	return (
		<Card className={layoutStyles.cart}>
			<Card.Header as="h5">Cart</Card.Header>
			<Card.Body>{items}</Card.Body>
			<Card.Footer>
				Grand Total:
				<span
					className={layoutStyles.floatRight}
				>{`£${props.total.toFixed(2)}`}</span>
			</Card.Footer>
		</Card>
	);
}

export default Cart;
