import React from "react"
import LifeCycle from "./component/NativeModule/LifeCycleAndroid";
import CalculatorNative from "./component/NativeModule/CalculatorNative";
import CPU from "./component/NativeModule/CPU";
import ReadSMS from "./component/ReadSMS";
export const MenuNativeModuleAndroids = [
    {
        id: 1,
        keyName: 'Native Android',
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
        keyName: 'Sent/Read SMS',
        data: [
            {
                name: 'Sent/Read SMS Native',
                component: <ReadSMS />,
                description: ""
            },
        ],
    },
];