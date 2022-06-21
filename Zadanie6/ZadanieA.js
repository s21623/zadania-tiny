const express = require('express');
const app = express();
const port = 3000;

app.get('/*', (req, res) => {
	const url = req.url;
	console.log(url)
	res.send(`Zwracam ${url}`)
})

app.listen(port, () => {
	console.log(`Działa na localhost ${port}`)
})