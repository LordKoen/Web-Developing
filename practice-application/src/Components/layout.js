import React from 'react';
import { Link } from 'gatsby';
import layoutStyles from './layout.module.css';
import Card from 'react-bootstrap/Card';

const FoodPage = ({ pageContext }) => (
	// <div className={layoutStyles.mainContainer}>
	// 	<div className={layoutStyles.main}>
	// 		<div className={layoutStyles.title}>{pageContext.title}</div>
	// 		<div className={layoutStyles.price}>{pageContext.price}</div>
	// 	</div>
	// 	<img src={pageContext.image} alt="" className={layoutStyles.img} />
	// 	<div className={layoutStyles.longDesc}>{pageContext.desc}</div>
	// 	<div className={layoutStyles.home}>
	// 		<Link to="/">Back to the menu</Link>
	// 	</div>
	// </div>

	<Card className={layoutStyles.mainContainer}>
		<Card.Img variant="top" src={pageContext.image} />
		<Card.Body>
			<Card.Title>{pageContext.title}</Card.Title>
			<Card.Text>{pageContext.desc}</Card.Text>
		</Card.Body>
	</Card>
);

export default FoodPage;
