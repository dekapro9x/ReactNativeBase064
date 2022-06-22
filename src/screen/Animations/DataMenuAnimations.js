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
import { StyledComponent } from "./components/lib/styled-components";
import {Table} from "./components/lib/table";
import {SwipeableItem} from "./components/extend/SwipeableItem";
//Extend:
import { TouchHandleAnimations } from "./components/extend/TouchHandleAnimations";
import { ZoomImgPanResponder } from "./components/extend/ZoomImgPanResponder";
import { TouchRecordAnimations } from "./components/extend/TouchRecordAnimations";
import {AssistiveTouchLiveIOS} from "./components/extend/AssistiveTouchLiveIOS";
export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animations Basic',
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
        ],
    },
    {
        id: 2,
        keyName: 'Animations Extend',
        data: [
            {
                name: 'Assistive Touch Handle',
                component: <TouchHandleAnimations />,
                description: ""
            },
            {
                name: 'ZoomImg PanResponder',
                component: <ZoomImgPanResponder />,
                description: ""
            },
            {
                name: 'Touch Record Animations',
                component: <TouchRecordAnimations />,
                description: ""
            },
            {
                name: 'Touch Record Animations',
                component: <AssistiveTouchLiveIOS />,
                description: ""
            },
            {
                name: 'Swipeable Item',
                component: <SwipeableItem />,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'UI/Library UI',
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
            {
                name: 'react-native-paper',
                component: <Table/>,
                description: ""
            },
            {
                name: 'react-native-bottom-sheet',
                component: <StyledComponent />,
                description: ""
            },
        ],
    },
];