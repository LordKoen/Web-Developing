import React from 'react';
import Layout from '../Components/layout';
import foodList from '../../static/foods.JSON';

function burger() {
	let item = foodList.filter((item) => {
		if (item.path == 'burger') {
			return item;
		}
	});

	return <Layout item={item[0]} />;
}

export default burger;
