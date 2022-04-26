import React from "react";
import { TimingAnimatedComponent } from "./components/core/timing";
import { SpringAnimatedComponent } from "./components/core/spring";

export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animated (core)',
        data: [
            {
                name: 'Animated.timing()',
                component: <TimingAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.decay()',
                component: <SpringAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.spring()',
                component: null,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'react-native-animatable (lib)',
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