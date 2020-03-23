import React from 'react';
import Button from 'react-bootstrap/Button';
import layoutStyles from './layout.module.css';

function OrderButton(props) {
	return (
		<Button
			variant="outline-primary"
			className={layoutStyles.orderButton}
			cart={props.cart}
		>
			Order
		</Button>
	);
}

export default OrderButton;
