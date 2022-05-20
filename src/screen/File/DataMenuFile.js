import React from "react"
//Read File:
import ReadPDF from "./component/ReadFile/PDF";
import ReadJSON from "./component/ReadFile/JSON";
import ReadMp3 from "./component/ReadFile/Mp3";
import ReadMp4 from "./component/ReadFile/Mp4";
//Write File:
import WriteTxt from "./component/WriteFile/Txt";
export const MenuFiles = [
    {
        id: 1,
        keyName: 'Read File',
        data: [
            {
                name: 'Read file PDF',
                component: <ReadPDF />,
                description: ""
            },
            {
                name: 'Read file JSON',
                component: <ReadJSON />,
                description: ""
            },
            {
                name: 'Read file MP3',
                component: <ReadMp3 />,
                description: ""
            },
            {
                name: 'Read file MP4',
                component: <ReadMp4 />,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'Write File',
        data: [
            {
                name: 'Write file system.log',
                component: <WriteTxt/>,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'Share File',
        data: [
            {
                name: 'Share File',
                component: <WriteTxt/>,
                description: ""
            },
        ],
    },

];