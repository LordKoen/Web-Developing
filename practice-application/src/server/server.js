const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.post('/', (request, response) => {
	console.log(request.body);
	response.send(request.body);
	response.end();
});
