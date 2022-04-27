import React from "react";
import { MapViewComponent } from "./components/MapView";
export const MenuMaps = [
    {
        id: 1,
        keyName: 'Googles Map',
        data: [
            {
                name: 'MapView',
                component: <MapViewComponent/>,
                description: ""
            },
            {
                name: 'Map full',
                component: null,
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