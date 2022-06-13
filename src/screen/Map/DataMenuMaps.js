import React from "react";
import { MapViewComponent } from "./components/MapView";
import MapCore from "./components/MapCore";
export const MenuMaps = [
    {
        id: 1,
        keyName: 'Map Core Functions',
        data: [
            {
                name: 'Map Functions',
                component: <MapCore/>,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'Googles Map UI',
        data: [
            {
                name: 'MapView',
                component: <MapViewComponent/>,
                description: ""
            }
        ],
    },
    {
        id: 3,
        keyName: 'Library Map',
        data: [
            {
                name: 'react-native-maps-directions (lib)',
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