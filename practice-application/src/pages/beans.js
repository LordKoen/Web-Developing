import React from 'react';
import Layout from '../Components/layout';
import foodList from '../../static/foods.JSON';

function beans() {
	let item = foodList.filter((item) => {
		if (item.path == 'beans') {
			return item;
		}
	});

	return <Layout item={item[0]} />;
}

export default beans;
