SocketIO = {
    initSocketIO (server){
        const socketIO = require("socket.io")(server, {
            cors: {
                origin: "*",
            }
        });

        socketIO.on("connection", (socket) => {
            console.log("Đã có 1 kết nối:");
            //Lắng nghe kết nối khởi tạo - báo lại cho client nếu kết nối thành công!
            socket.on("check-connect-to-server", (event) => {
                if (event && event == "client-connect-to-server") {
                    console.log("Đã nghe thấy 1 event:", event);
                    socket.emit("connect-to-server", "CONNECT-TO-SERVER-SUCCESS");
                }
            })
        
            //Lắng nghe tin nhắn gửi đi từ client:
            socket.on("client_sent_mess_to_server", function (mess) {
                console.log("Đã nghe thấy 1 tin nhắn:", mess);
                const idMessRandom = `${Math.random()}`;
                console.log(idMessRandom);
                socket.emit("server-rep", [
                    {
                        text: 'Hãy nói gì đi!...',
                        user: { _id: 2 },
                        createdAt: '2022-05-31T16:16:57.048Z',
                        _id: idMessRandom
                    }
                ])
            })

            //Ngắt kết nối client - server khi 1 bên rời khỏi:
            socket.on("disconnect", () => { });
        });
    },
}

module.exports = SocketIO;