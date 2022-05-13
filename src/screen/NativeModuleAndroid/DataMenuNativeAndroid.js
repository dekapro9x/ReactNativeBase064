import React from "react"
import NativeModuleCalendar from "./component/NativeModuleCalendar";
import ReadSMS from "./component/ReadSMS";
export const MenuNativeModuleAndroids = [
    {
        id: 1,
        keyName: 'Native Module Test',
        data: [
            {
                name: 'Native Android',
                component: <NativeModuleCalendar />,
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