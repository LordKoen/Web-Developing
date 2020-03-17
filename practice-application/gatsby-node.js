exports.createPages = ({ actions: { createPage } }) => {
	const foods = require('./foods.json');
	foods.forEach((food) => {
		createPage({
			path: `/${food.slug}`,
			component: require.resolve('./src/components/layout.js'),
			context: {
				title: food.title,
				price: food.price,
				desc: food.longDesc,
				image: food.imgURL
			}
		});
	});
};
