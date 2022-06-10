const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200,{"Content-Type":"text/plain"});

	switch(req.url) {
		case '/hello-world':
			res.end("Hello World");   
			break;
		case '/sprawdzam':
			res.end("Sprawdzam");
		break;
		default:
			res.end(`Zwaracam url ${req.url}`);
	}
});

server.listen(8000, "localhost");