import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Main.css';
import Helmet from 'react-helmet';

function App() {
	return (
		<React.Fragment>
			<Helmet>
				<title>Josie Proto</title>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
					crossorigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<header />
			<main>
				<div>Hello world!</div>
			</main>
		</React.Fragment>
	);
}

export default App;
