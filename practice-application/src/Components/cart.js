import React from 'react';
import Card from 'react-bootstrap/Card';
import layoutStyles from './layout.module.css';

function Cart(props) {
	let items = props.items.map((item) => {
		return (
			<Card.Text key={Math.random()}>
				{item.title}
			</Card.Text>
		);
	});

	return (
		<Card className={layoutStyles.cart}>
			<Card.Header as="h5">Cart</Card.Header>
			<Card.Body>
				{items}
			</Card.Body>
		</Card>
	);
}

export default Cart;
