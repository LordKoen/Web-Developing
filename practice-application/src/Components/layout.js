import React from 'react';
import { Link } from 'gatsby';
import layoutStyles from './layout.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout(props) {
	let alt = `picture of ${props}`;
	return (
		<div className={layoutStyles.mainContainer}>
			<div className={layoutStyles.main}>
				<div className={layoutStyles.title}>
					{props.item.title}
				</div>
				<div className={layoutStyles.price}>
					{props.item.price}
				</div>
			</div>
			<div className={layoutStyles.item}>
				<img
					src={props.item.imgURL}
					alt={alt}
					className={layoutStyles.img}
				/>
			</div>
			<div className={layoutStyles.longDesc}>
				{props.item.longDesc}
			</div>
			<div className={layoutStyles.home}>
				<Link to="/">Back to the menu</Link>
			</div>
		</div>
	);
}

export default Layout;
