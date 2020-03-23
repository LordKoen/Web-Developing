const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.post('/', (request, response) => {
	console.log('I got a request');
	console.log(request.body);
	response.end();
});
