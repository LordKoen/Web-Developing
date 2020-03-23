import React from 'react';
import Button from 'react-bootstrap/Button';
import layoutStyles from './layout.module.css';
import { json } from 'body-parser';

function OrderButton(props) {
	function handleClick() {
		const options = {
			method: 'POST',
			body: JSON.stringify(props.cart),
			mode: 'cors',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			}
		};

		fetch('http://localhost:7000/', options).then((response) => {
			console.log(response);
		});
	}

	return (
		<Button
			variant="outline-primary"
			className={layoutStyles.orderButton}
			cart={props.cart}
			onClick={handleClick}
			name="order"
		>
			Order
		</Button>
	);
}

export default OrderButton;
