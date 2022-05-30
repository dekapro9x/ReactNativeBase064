import React from "react"
import ChatMess from "./component/ChatMess";
export const MenuSockets = [
    {
        id: 1,
        keyName: 'Socket IO',
        data: [
            {
                name: 'Chat Mess',
                component: <ChatMess />,
                description: ""
            },
            {
                name: 'Call Phone',
                component: <ChatMess />,
                description: ""
            },
            {
                name: 'CallVideo',
                component: <ChatMess />,
                description: ""
            },
        ],
    },
];