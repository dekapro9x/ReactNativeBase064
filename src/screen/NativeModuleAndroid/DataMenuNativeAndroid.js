import React from "react"
import LifeCycle from "./component/NativeModule/LifeCycleAndroid";
import CalculatorNative from "./component/NativeModule/CalculatorNative";
import CPU from "./component/NativeModule/CPU";
import ReadSMS from "./component/ReadSMS";
import {PDAScannerQrCode} from "./component/PDA";
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
            {
                name: 'Sent/Read SMS Native',
                component: <ReadSMS />,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'SDK Android',
        description:"Software Development Kit Android",
        data: [
            {
                name: 'PDA',
                component: <PDAScannerQrCode />,
                description: "SDK máy quét mã vạch PDA-Zebra-TC21-2D"
            },
        ],
    },
];