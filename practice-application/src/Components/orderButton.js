import React from 'react';
import Button from 'react-bootstrap/Button';
import layoutStyles from './layout.module.css';

function OrderButton(props) {
	function handleClick() {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(props.cart)
		};

		fetch('http://localhost7000/', options).then((response) => {
			console.log(response);
		});
	}

	return (
		<Button
			variant="outline-primary"
			className={layoutStyles.orderButton}
			cart={props.cart}
			onClick={handleClick}
		>
			Order
		</Button>
	);
}

export default OrderButton;
