import React from "react";
//Core:
import { DecayAnimatedComponent } from "./components/core/decay";
import { SpringAnimatedComponent } from "./components/core/spring";
import { TimingAnimatedComponent } from "./components/core/timing";
//Library:
import { SliderAnimations } from "./components/lib/animatable/SliderAnimations";
import { ButtonAnimations } from "./components/lib/animatable/ButtonAnimations";
import { ButtonAnimationsClass } from "./components/lib/animatable/ButtonAnimationsClass";
import { MaskedViewAnimations } from "./components/lib/masked_view";
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
                component: <DecayAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.spring()',
                component: <SpringAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.parallel()',
                component: <SpringAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.sequence()',
                component: <SpringAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.stagger()',
                component: <SpringAnimatedComponent />,
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
        keyName: 'react-native-animatable (lib)',
        data: [
            {
                name: 'Animatable Slider',
                component: <SliderAnimations />,
                description: ""
            },
            {
                name: 'Animatable Button',
                component: <ButtonAnimations /> || <ButtonAnimationsClass />,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'react-native-masked-view (lib)',
        data: [
            {
                name: 'Text animations',
                component: <MaskedViewAnimations />,
                description: ""
            },
        ],
    },
];