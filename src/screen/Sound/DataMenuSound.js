import React from "react";
import RecordSoundToText from "./component/RecordSoundToText";
export const MenuSounds = [
    {
        id: 1,
        keyName: 'Sound To Text',
        data: [
            {
                name: 'Records Sound Speak To Text',
                component: <RecordSoundToText/>,
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
                component: <RecordSoundToText/>,
                description: ""
            },
        ],
    },
];