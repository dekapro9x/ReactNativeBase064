import React from "react";
import QrScannerCamera from "./component/CameraRoot/QR";
//Camera Root:
import TakePictureCamera from "./component/CameraRoot/TakePicture";
import VideoRecords from "./component/CameraRoot/VideoRecords";
import { CameraVisionsCore } from "./component/VisionsCamera/Core";
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
            {
                name: "react-native-vision-camera (lib)",
                component: <CameraVisionsCore />,
                description: ""
            },
        ],
    },
];