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
                text: 'Hi Dev!',
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

    const socketInit = ()=>{
        const ipConfig = "192.168.0.101";
        const host = `http://${ipConfig}:3000`;
        socketRef.current = SocketIOClient(host);
    }

    const onSendMess = useCallback((messages = []) => {
        socketRef.current.emit('client_sent_mess_to_server', "Xin chào!");
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, [])

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

