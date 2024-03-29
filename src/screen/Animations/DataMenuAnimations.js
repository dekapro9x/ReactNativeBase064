import React from "react";
//Core:
import { DecayAnimatedComponent } from "./components/core/decay";
import { SpringAnimatedComponent } from "./components/core/spring";
import { TimingAnimatedComponent } from "./components/core/timing";
import {ParallelAnimations} from "./components/core/parallel";

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
import { AppDebounceButtonElementReuse } from "./components/elementReuse/AppDebounceButtonElementReuse";
import { AppCalendarElementReuse } from "./components/elementReuse/AppCalendarElementReuse";
import {AppImagesRenderSizeElementReuse} from "./components/elementReuse/AppImagesRenderSizeElementReuse";
export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animations Basic',
        description:"Basic",
        data: [
            {
                name: 'Method Animated: Animated.timing()',
                component: <TimingAnimatedComponent />,
                description: "Ánh xạ với phạm vi thời gian để Easing value"
            },
            {
                name: 'Method Animated: Animated.decay()',
                component: <DecayAnimatedComponent />,
                description: "Bắt đầu với một vận tốc ban đầu và dần dần dừng lại"
            },
            {
                name: 'Method Animated: Animated.spring()',
                component: <SpringAnimatedComponent />,
                description: "Cung cấp một mô hình vật lý spring cơ bản"
            },
            {
                name: 'Composing method: Animated.parallel()',
                component: <ParallelAnimations />,
                description: "hực hiện các animation cùng một thời điểm"
            },
            {
                name: 'Composing method: Animated.sequence()',
                component: <SpringAnimatedComponent />,
                description: "Thực hiện các animation một cách tuần tự"
            },
            {
                name: 'Composing method: Animated.stagger()',
                component: <SpringAnimatedComponent />,
                description: "Thực hiện các animation với sự kết hợp cả tuần tự và song song"
            },
        ],
    },
    {
        id: 2,
        keyName: 'Animations Extend',
        description:"Extend",
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
        description:"Lib/UI",
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
        description:"Element Component Reuse",
        data: [
            {
                name: 'App Text Element Reuse',
                component: <AppTextElementReuse />,
                description: "AppText"
            },
            {
                name: 'App Button Debounce Element Reuse',
                component: <AppDebounceButtonElementReuse />,
                description: "App Touchable Debounces"
            },
            {
                name: 'App calendar Element Reuse',
                component: <AppCalendarElementReuse />,
                description: "App Calendar"
            },
            {
                name: 'App Iamge Render Size Element Reuse',
                component: <AppImagesRenderSizeElementReuse />,
                description: "App Images"
            },
        ],
    },
];