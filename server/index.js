//npm run server
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const port = 3000;

const socketIO = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});


server.listen(port, () => {
    console.log('Server đang chạy trên cổng 3000:');
});

socketIO.on("connection", (socket) => {
    console.log("Đã có 1 kết nối:");
    socket.on('userJoined', (userId) => {});
    socket.on('message', (message) => {});
    socket.on("client_sent_mess_to_server", function (data) {
        console.log("Đã nghe thấy 1 event:", data);
    })
    socket.on("disconnect", () => { });
});