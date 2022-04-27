import React from "react";
import { TimingAnimatedComponent } from "./components/core/timing";
import { SpringAnimatedComponent } from "./components/core/spring";

export const MenuMaps = [
    {
        id: 1,
        keyName: 'Googles Map',
        data: [
            {
                name: 'Map Googles',
                component: <TimingAnimatedComponent />,
                description: ""
            },
            {
                name: 'Map full',
                component: <SpringAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.spring()',
                component: null,
                description: ""
            },
            {
                name: 'Animated Extend',
                component: null,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'react-native-maps-directions (lib)',
        data: [
            {
                name: '',
                component: '',
                description: ""
            },
            {
                name: '',
                component: '',
                description: ""
            },
            {
                name: '',
                component: '',
                description: ""
            },
            {
                name: '',
                component: '',
                description: ""
            },
        ],
    },
];