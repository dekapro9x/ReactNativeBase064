import React from "react";
import FetchAPILogin from "./component/FetchAPI/api_login";
export const MenuServerNodeJS = [
    {
        id: 1,
        keyName: 'Fetch API',
        data: [
            {
                name: 'API Login',
                component: <FetchAPILogin/>,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'SocketIO',
        data: [
            {
                name: 'SocketIO',
                component: null,
                description: ""
            },
        ],
    },
];