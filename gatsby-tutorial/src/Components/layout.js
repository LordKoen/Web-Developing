import React from 'react';
import layoutstyles from './layout.module.css';
import { Link } from 'gatsby';

function Layout({ children }) {
	return (
		<div className={layoutstyles.layout}>
			<header className={layoutstyles.header}>
				<h1>Luca's Website</h1>
				<ul className>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about/">About</Link>
					</li>
				</ul>
			</header>
			<main className={layoutstyles.main}>{children}</main>
		</div>
	);
}

export default Layout;
