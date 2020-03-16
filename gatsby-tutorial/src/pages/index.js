import React from 'react';
import ReactDom from 'react-dom';
import Layout from '../Components/layout';
import { Link } from 'gatsby';

function App() {
	return (
		<Layout>
			<div>
				<h1>
					Welcome to my fake Gatsby site that I am building to
					practice
				</h1>
				<p>
					In this site I will be learning how to applying the
					knowledge I gain in gatsby, including gatsby specific
					features like the linking and integration with GraphQL
				</p>
			</div>
		</Layout>
	);
}

export default App;
