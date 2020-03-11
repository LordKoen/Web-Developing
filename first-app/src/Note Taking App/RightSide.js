import React from 'react';
import './App.css';

function RightSide(props) {
	return (
		<div className="rightSideContainer">
			<textarea
				name={props.id}
				id={props.id}
				value={props.text}
				onChange={props.handleChange}
				className="noteSpace"
			/>
		</div>
	);
}

export default RightSide;
