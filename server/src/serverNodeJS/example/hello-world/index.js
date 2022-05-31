//Run terminal:
//Step 1: cd D:\Projects\ReactNativeBase064\src\serverNodeJS\example\hello-world
//Step 2: node index.js
//Step 3: http://localhost:3000/

const http = require('http');

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');