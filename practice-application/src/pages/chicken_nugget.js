import React from 'react';
import Layout from '../Components/layout';
import foodList from '../../static/foods.JSON';

function chicken_nugget() {
	let item = foodList.filter((item) => {
		if (item.path == 'chicken_nugget') {
			return item;
		}
	});

	return <Layout item={item[0]} />;
}

export default chicken_nugget;
