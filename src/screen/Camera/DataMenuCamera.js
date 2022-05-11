import React from "react"
//Camera Root:
import TakePictureCamera from "./component/CameraRoot/TakePicture";
import QrScannerCamera from "./component/CameraRoot/QR";
import VideoRecords from "./component/CameraRoot/VideoRecords";
//Vision-camera:
import CameraTakePicture from "./component/VisionsCamera/CameraTakePicture";
import CameraScanner from "./component/VisionsCamera/CameraScanner";
import { CameraVisionsCore } from "./component/VisionsCamera/Core"
import ZoomCamera from "./component/VisionsCamera/ZoomCamera/index";
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
        ],
    },
    {
        id: 2,
        keyName: 'react-native-vision-camera (lib)',
        data: [
            {
                name: "Camera Visions Core",
                component: <CameraVisionsCore />,
                description: ""
            },
            ,
            {
                name: "Take Picture",
                component: <CameraTakePicture />,
                description: ""
            },
            {
                name: "Scanner QR",
                component: <CameraScanner />,
                description: ""
            },
            {
                name: "Zoom Camera",
                component: <ZoomCamera />,
                description: ""
            },
        ],
    },

];