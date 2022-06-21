const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
	res.send(`Hello World`)
})

app.get('/form', (req, res) => {
	res.render("form")
})

app.listen(port, () => {
	console.log(`Działa na localhost ${port}`)
})