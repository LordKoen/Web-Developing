import React from 'react';
import { Link } from 'gatsby';
import layoutStyles from './layout.module.css';
import Card from 'react-bootstrap/Card';

const FoodPage = ({ pageContext }) => (
	<Card className={layoutStyles.mainContainer}>
		<Card.Img variant="top" src={pageContext.image} />
		<Card.Body className={layoutStyles.body}>
			<Card.Title>{pageContext.title}</Card.Title>
			<Card.Subtitle>{pageContext.price}</Card.Subtitle>
			<Card.Text className={layoutStyles.text}>
				{pageContext.desc}
			</Card.Text>
			<Link to="/">Back to the menu</Link>
		</Card.Body>
	</Card>
);

export default FoodPage;
