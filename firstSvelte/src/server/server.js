const express = require('express');
const stripe = require('stripe')(
	'sk_test_SuRLJivTNgY8d6Uq93RoAFlE00FnyIQFGq'
);


app.listen(port, () => console.log(`Listening on port ${port}!`));