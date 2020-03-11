import React from 'react';

function Jokes(props) {
	let body;

	if (props.question === undefined || props.question === '') {
		body = (
			<div>
				<ul>
					<li>
						<h3>{props.punchLine}</h3>
					</li>
				</ul>
			</div>
		);
	} else {
		body = (
			<div>
				<ul>
					<li>
						<h3>Question: {props.question}</h3>
						{props.punchLine}
					</li>
				</ul>
			</div>
		);
	}

	return body;
}

export default Jokes;
