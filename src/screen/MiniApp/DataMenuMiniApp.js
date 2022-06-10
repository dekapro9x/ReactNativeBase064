import React from "react"
import StopWatch from "./component/StopWatch";
import MoveableCircle from "./component/MoveableCircle";
import SortMenu from "./component/SortMenu";
export const MenuMiniApp = [
    {
        id: 1,
        keyName: 'Mini App 1: Stop Watch',
        data: [
            {
                name: 'Stop Watch',
                component: <StopWatch />,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'Mini App 2: Moveable Circle',
        data: [
            {
                name: 'Moveable Circle',
                component: <MoveableCircle />,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'Mini App 2: Sort Menu',
        data: [
            {
                name: 'Sort Menu',
                component: <SortMenu />,
                description: ""
            },
        ],
    },
];