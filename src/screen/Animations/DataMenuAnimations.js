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
import { Table } from "./components/lib/table";
import { SwipeableItem } from "./components/extend/SwipeableItem";
import { ListSwipeableItem } from "./components/extend/ListSwipeableItem";
import {Svg}  from "./components/lib/svg";

//Extend:
import { TouchHandleAnimations } from "./components/extend/TouchHandleAnimations";
import { ZoomImgPanResponder } from "./components/extend/ZoomImgPanResponder";
import { TouchRecordAnimations } from "./components/extend/TouchRecordAnimations";
import { AssistiveTouchLiveIOS } from "./components/extend/AssistiveTouchLiveIOS";

//Element Reuse:
import {AppTextElementReuse} from "./components/elementReuse/AppTextElementReuse";

export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animations Basic',
        description:"Hiệu ứng cơ bản",
        data: [
            {
                name: 'Animated.timing()',
                component: <TimingAnimatedComponent />,
                description: "Hiệu ứng theo thời gian"
            },
            {
                name: 'Animated.decay()',
                component: <DecayAnimatedComponent />,
                description: "Hiệu ứng theo gia tốc"
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
        description:"Hiệu ứng nâng cao",
        data: [
            {
                name: 'Assistive Touch Handle',
                component: <TouchHandleAnimations />,
                description: "Di chuyển vị trí nút trên màn hình"
            },
            {
                name: 'ZoomImg PanResponder',
                component: <ZoomImgPanResponder />,
                description: ""
            },
            {
                name: 'Touch Record Animations',
                component: <TouchRecordAnimations />,
                description: "Hiệu ứng ghi âm"
            },
            {
                name: 'Assistive Touch Live IOS',
                component: <AssistiveTouchLiveIOS />,
                description: ""
            },
            {
                name: 'Swipeable Item Animated',
                component: <SwipeableItem />,
                description: ""
            },
            {
                name: 'List Swipeable Custom',
                component: <ListSwipeableItem />,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'UI/Library UI',
        description:"Thư viện hiệu ứng/UI",
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
                component: <Table />,
                description: ""
            },
            {
                name: 'react-native-styled-components',
                component: <StyledComponent />,
                description: ""
            },
            {
                name: 'react-native-svg',
                component: <Svg />,
                description: ""
            },
        ],
    },
    {
        id: 4,
        keyName: 'App element reuse',
        description:"Thành phần tái sử dụng",
        data: [
            {
                name: 'App Text Element Reuse',
                component: <AppTextElementReuse />,
                description: ""
            },
            {
                name: 'App Button Debounce Element Reuse',
                component: <AppTextElementReuse />,
                description: ""
            },
            {
                name: 'App Text Element Reuse',
                component: <AppTextElementReuse />,
                description: ""
            },
        ],
    },
];