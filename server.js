const http = require('http');

const port = 7229; //local port number

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': "text/html"});
    response.write("<h1>Hello, this is from my server</h1>");
    response.end();
}).listen(port, () =>{
    console.log(`Nodejs server started on port ${port}`);
});

//  http://localhost:7229 // use this to open server