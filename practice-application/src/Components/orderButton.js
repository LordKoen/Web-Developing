import React from 'react';
import Button from 'react-bootstrap/Button';
import layoutStyles from './layout.module.css';

function OrderButton(props) {
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
