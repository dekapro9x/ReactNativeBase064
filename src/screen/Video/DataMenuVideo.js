import React from "react";
import Youtube from "./component/Youtube";
import VideoMp4 from "./component/VideoMp4";
export const MenuVideo = [
    {
        id: 1,
        keyName: 'Youtube',
        data: [
            {
                name: 'Youtube Video',
                component: <Youtube/>,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'Video Mp4',
        data: [
            {
                name: 'Mp4 Video',
                component: <VideoMp4/>,
                description: ""
            },
        ],
    },
];