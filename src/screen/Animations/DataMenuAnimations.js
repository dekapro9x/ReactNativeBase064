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
import { BottomSheetComponent } from "./components/lib/bottom_sheet";
//Extend:
import { TouchHandleAnimations } from "./components/extend/TouchHandleAnimations";
export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animated Core',
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
        keyName: 'Library',
        data: [
            {
                name: 'react-native-animatable (Slider)',
                component: <SliderAnimations />,
                description: ""
            },
            {
                name: 'react-native-animatable(Button) ',
                component: <ButtonAnimations /> || <ButtonAnimationsClass />,
                description: ""
            },
            {
                name: 'react-native-masked-view',
                component: <MaskedViewAnimations />,
                description: ""
            },
            {
                name: 'react-native-bottom-sheet',
                component: <BottomSheetComponent />,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'Animations Extend',
        data: [
            {
                name: 'Touchable Handle',
                component: <TouchHandleAnimations />,
                description: ""
            },
        ],
    },
];