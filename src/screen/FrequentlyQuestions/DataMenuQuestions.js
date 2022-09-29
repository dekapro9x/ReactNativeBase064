import React from "react"
import Lib1 from "./component/lib1"
export const MenuQuestion= [
    {
        id: 1,
        keyName: 'JS',
        description: "Câu hỏi phỏng vấn Js",
        data: [
            {
                name: 'JS',
                component: <Lib1/>,
                description: "Câu hỏi phỏng vấn về JS"
            },
        ],
    },
    {
        id: 2,
        keyName: 'Hook',
        data: [
            {
                name: 'JS là gì?',
                component: <Lib1/>,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'Redux',
        data: [
            {
                name: 'JS là gì?',
                component: <Lib1/>,
                description: ""
            },
        ],
    },
];