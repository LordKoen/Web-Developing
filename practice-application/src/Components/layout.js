import React from 'react';
import { Link } from 'gatsby';
import layoutStyles from './layout.module.css';

const FoodPage = ({ pageContext }) => (
	<div className={layoutStyles.mainContainer}>
		<div className={layoutStyles.main}>
			<div className={layoutStyles.title}>{pageContext.title}</div>
			<div className={layoutStyles.price}>{pageContext.price}</div>
		</div>
		<img src={pageContext.image} alt="" className={layoutStyles.img} />
		<div className={layoutStyles.longDesc}>{pageContext.desc}</div>
		<div className={layoutStyles.home}>
			<Link to="/">Back to the menu</Link>
		</div>
	</div>
);

export default FoodPage;
