import React from "react";
import QrScannerCamera from "./component/CameraRoot/QR";
//Camera Root:
import TakePictureCamera from "./component/CameraRoot/TakePicture";
import VideoRecords from "./component/CameraRoot/VideoRecords";
import MediaPicture from "./component/MediaImage";
export const MenuCameras = [
    {
        id: 1,
        keyName: 'Camera',
        description: "Xử lý camera bao gồm: chụp ảnh, quét mã QR code, quay video và lưu vào bộ nhớ máy",
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
        keyName: 'Images',
        description:"Lấy danh sách ảnh trong album máy, xử lý hình ảnh trong bộ nhớ máy",
        data: [
            {
                name: 'Get Album Images By Camera Roll',
                component: <MediaPicture />,
                description: "Lấy danh sách ảnh trong album ảnh bằng camera-roll"
            },
            {
                name: 'Crop Images',
                component: <TakePictureCamera />,
                description: "Cắt ảnh, chỉnh sửa kích thước ảnh"
            },
        ],
    },
];