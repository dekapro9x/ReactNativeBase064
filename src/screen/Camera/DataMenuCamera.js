import React from "react"
import TakePictureCamera from "./component/TakePicture";
import QrScannerCamera from "./component/QR";
export const MenuCameras = [
    {
        id: 1,
        keyName: 'Take Picture Camera',
        data: [
            {
                name: 'Take Picture',
                component: <TakePictureCamera />,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'QR',
        data: [
            {
                name: 'QR Scanner',
                component: <QrScannerCamera />,
                description: ""
            },
        ],
    },
    {
        id: 3,
        keyName: 'Video Records',
        data: [
            {
                name: 'Animatable Slider',
                component: <QrScannerCamera />,
                description: ""
            },
        ],
    },

];