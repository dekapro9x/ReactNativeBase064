import React from "react";
import RecordSoundToText from "./component/RecordSoundToText";
import RecordSoundTouch from "./component/RecordSoundTouch";
export const MenuSounds = [
    {
        id: 1,
        keyName: 'Sound To Text',
        data: [
            {
                name: 'Records Sound Speak To Text',
                component: <RecordSoundToText />,
                description: ""
            },
            {
                name: 'Records Sound Touch',
                component: <RecordSoundTouch />,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'Text To Speech',
        data: [
            {
                name: 'Text To Speech',
                component: <RecordSoundToText />,
                description: ""
            },
        ],
    },
];