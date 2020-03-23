const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.get('/', (request, response) => {
	response.send('Main Page');
});

app.post('/order', (request, response) => {
  console.log(request.body)
});
