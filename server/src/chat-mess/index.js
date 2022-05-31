//cd D:\Projects\ReactNativeBase064\server
//npm run server
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongojs = require('mongojs');

var app = express();
var server = http.Server(app);
var ObjectID = mongojs.ObjectID;
var websocket = socketio(server);
server.listen(3000, () => { console.log('listening on *:3000') });
var db = mongojs(process.env.MONGO_URL || 'mongodb://localhost:27017/local');
var clients = {};
var users = {};
var chatId = 1;

websocket.on('connection', (socket) => {
    console.log("Bắt đầu ngheeee")
    clients[socket.id] = socket;
    socket.on('userJoined', (userId) => onUserJoined(userId, socket));
    socket.on('message', (message) => onMessageReceived(message, socket));
});

function onUserJoined(userId, socket) {
    try {
        if (!userId) {
            var user = db.collection('users').insert({}, (err, user) => {
                socket.emit('userJoined', user._id);
                users[socket.id] = user._id;
                _sendExistingMessages(socket);
            });
        } else {
            users[socket.id] = userId;
            _sendExistingMessages(socket);
        }
    } catch (err) {
        console.err(err);
    }
}

function onMessageReceived(message, senderSocket) {
    var userId = users[senderSocket.id];
    if (!userId) return;
    _sendAndSaveMessage(message, senderSocket);
}

// Send the pre-existing messages to the user that just joined.
function _sendExistingMessages(socket) {
    var messages = db.collection('messages')
        .find({ chatId })
        .sort({ createdAt: 1 })
        .toArray((err, messages) => {
            // If there aren't any messages, then return.
            if (!messages.length) return;
            socket.emit('message', messages.reverse());
        });
}

// Save the message to the db and send all sockets but the sender.
function _sendAndSaveMessage(message, socket, fromServer) {
    var messageData = {
        text: message.text,
        user: message.user,
        createdAt: new Date(message.createdAt),
        chatId: chatId
    };

    db.collection('messages').insert(messageData, (err, message) => {
        // If the message is from the server, then send to everyone.
        var emitter = fromServer ? websocket : socket.broadcast;
        emitter.emit('message', [message]);
    });
}

// Allow the server to participate in the chatroom through stdin.
var stdin = process.openStdin();
stdin.addListener('data', function (d) {
    _sendAndSaveMessage({
        text: d.toString().trim(),
        createdAt: new Date(),
        user: { _id: 'robot' }
    }, null /* no socket */, true /* send from server */);
});