import React from 'react';
import './App.css';

function LeftSide(props) {
	return (
		<div
			className="leftSideItems"
			id={props.id === props.currentNote.id ? 'activeItem' : null}
		>
			{props.title}
		</div>
	);
}

export default LeftSide;
