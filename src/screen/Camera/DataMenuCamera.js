import React from "react";
import QrScannerCamera from "./component/CameraRoot/QR";
//Camera Root:
import TakePictureCamera from "./component/CameraRoot/TakePicture";
import VideoRecords from "./component/CameraRoot/VideoRecords";
export const MenuCameras = [
    {
        id: 1,
        keyName: 'Camera',
        data: [
            {
                name: 'Take Picture',
                component: <TakePictureCamera />,
                description: ""
            },
            {
                name: 'QR Scanner',
                component: <QrScannerCamera />,
                description: ""
            },
            {
                name: 'Record Video',
                component: <VideoRecords />,
                description: ""
            },
        ],
    },
    {
        id: 1,
        keyName: 'Handle Images',
        data: [
            {
                name: 'Select File Images',
                component: <TakePictureCamera />,
                description: ""
            },
            {
                name: 'Crop Images',
                component: <TakePictureCamera />,
                description: ""
            },
        ],
    },
];