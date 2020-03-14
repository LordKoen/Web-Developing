/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'gatsby-test-deploy-lordkoen',
				protocol: 'https',
				hostname: 'www.example.com'
			}
		},
		`gatsby-plugin-twitter`
	]
};
