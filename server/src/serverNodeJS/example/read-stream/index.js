//Run terminal:
//Step 1: cd D:\Projects\ReactNativeBase064\src\serverNodeJS\example\read-stream
//Step 2: node index.js
//Step 3: http://localhost:3000/

const http = require('http');
const fs = require('fs');    

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    let vidstream = fs.createReadStream('Earn.mp4');
    vidstream.pipe(res);
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');