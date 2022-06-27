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
                description: "Đọc file .pdf"
            },
            {
                name: 'Read file JSON',
                component: <ReadJSON />,
                description: "Đọc file .JSON"
            },
            {
                name: 'Read file MP3',
                component: <ReadMp3 />,
                description: "Đọc file .mp3"
            },
            {
                name: 'Read file MP4',
                component: <ReadMp4 />,
                description: "Đọc file .mp4"
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
                description: "Ghi và đọc file log hệ thống"
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
                description: "Chia sẻ file"
            },
        ],
    },

];