import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';

export default function ChatMess() {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef(null);

    useEffect(() => {
        socketInit();
        setMessages([
            {
                _id: 1,
                text: 'Hi Nam!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        socketRef.current.on("server-rep", (messServer) => {
            console.log("MessServer", messServer);
            readMessServer(messServer);
        })
        return () => {
        };
    }, []);

    const socketInit = () => {
        //Khởi tạo kết nối socket tới server:
        const ipConfig = "192.168.0.101";
        const host = `http://${ipConfig}:3000`;
        socketRef.current = SocketIOClient(host);
        socketListening();
    }

    //Kiểm tra kết nối tới server:
    const socketListening = () => {
        socketRef.current.emit("check-connect-to-server", "client-connect-to-server");
        socketRef.current.on("connect-to-server", (serverReport) => {
            console.log("serverReport", serverReport);
            if (serverReport && serverReport == "CONNECT-TO-SERVER-SUCCESS") {
                console.log("Kết nối tới server thành công!");
                const messConnectServerSuccess = {
                    _id: "8a88bd24-72bd-4da0-b4bf-4080a12dee9a",
                    createdAt: "2022-05-31T16:11:07.351Z",
                    text: "Bạn đã kết nối tới server thành công!",
                    user: {
                        _id: 2
                    }
                }
                onSendMess(messConnectServerSuccess);
            }
        });
    };

    //Gửi tin nhắn đến server:
    const onSendMess = useCallback((messages = []) => {
        socketRef.current.emit('client_sent_mess_to_server', messages);
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    }, []);

    //Đọc tin nhắn từ server phản hồi:
    const readMessServer =  useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    }, []);

    return (
        <View style={{ height: SizeRpScreen.device_height, width: SizeRpScreen.device_width, marginBottom: 150, }}>
            <GiftedChat
                style={{ height: "100%", width: "100%" }}
                messages={messages}
                onSend={(messages) => onSendMess(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
}

