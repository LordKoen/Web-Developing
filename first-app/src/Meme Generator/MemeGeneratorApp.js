import React from 'react';
import MemeGenerator from './MemeGenerator';
import Header from './Header';

import './MemeGenerator.css';

function MemeGeneratorApp() {
	return (
		<div>
			<Header />
			<MemeGenerator />
		</div>
	);
}

export default MemeGeneratorApp;
