import React from "react";
import SpringCubic from "./components/core/timing/SpringCubic";
import SpringQuad from "./components/core/timing/SpringQuad";

export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animated (core)',
        data: [
            {
                name: 'Animated.timing() - SpringCubic',
                component: <SpringCubic />,
                description: ""
            },
            {
                name: 'Animated.timing() - SpringQuad',
                component: <SpringQuad />,
                description: ""
            },
            {
                name: 'Animated.decay()',
                component: null,
                description: ""
            },
            {
                name: 'Animated.spring()',
                component: null,
                description: ""
            },
            {
                name: 'Animated.Value()',
                component: null,
                description: ""
            },
            {
                name: 'Animated.Value()',
                component: null,
                description: ""
            },
            {
                name: 'Animated.Value()',
                component: null,
                description: ""
            },
            {
                name: 'Animated.Value()',
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