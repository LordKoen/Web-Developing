import React from 'react';

function Products(props) {
	return (
		<div>
			<p>
				<strong>Name:</strong> {props.product.name} <br />
				<strong>Price:</strong> £{props.product.price} <br />
				<strong>What is it:</strong> {props.product.description}{' '}
				<br /> <br />
			</p>
		</div>
	);
}

export default Products;
