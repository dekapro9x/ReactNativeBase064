//yarn start
const express = require('express');
const cors = require("cors");
const routes = require("./src/route");
const app = express();
//Tạo server http:
const server = require("http").createServer(app);
const port = 3000;
//Tạo server socketIO:
const SocketIO = require('./src/socket');
SocketIO.initSocketIO(server);
//Gắn lib và route:
app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(port, () => {
    console.log('Server đang chạy trên cổng 3000:');
});



