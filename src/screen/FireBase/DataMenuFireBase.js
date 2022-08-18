import React from "react"
import FireBaseAuth from "./component/FireBaseAuth";
export const MenuFireBase= [
    {
        id: 1,
        keyName: 'FireBase',
        description: "FireBase Services",
        data: [
            {
                name: 'FireBase Authentication',
                component: <FireBaseAuth/>,
                description: "Authentication Account "
            },
        ],
    },
];