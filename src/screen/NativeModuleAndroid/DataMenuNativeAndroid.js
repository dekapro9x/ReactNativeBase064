import React from "react"
import LifeCycle from "./component/NativeModule/LifeCycleAndroid";
import CalculatorNative from "./component/NativeModule/CalculatorNative";
import CPU from "./component/NativeModule/CPU";
import ReadSMS from "./component/ReadSMS";
export const MenuNativeModuleAndroids = [
    {
        id: 1,
        keyName: 'Native Module Android Core',
        data: [
            {
                name: 'LifeCycle',
                component: <LifeCycle />,
                description: ""
            },
            {
                name: 'Calculator',
                component: <CalculatorNative />,
                description: ""
            },
            {
                name: 'CPU',
                component: <CPU />,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'Read SMS',
        data: [
            {
                name: 'Read SMS Native Module',
                component: <ReadSMS />,
                description: ""
            },
        ],
    },
];