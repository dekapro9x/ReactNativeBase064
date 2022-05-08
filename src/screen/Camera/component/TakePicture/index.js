import { ContextContainer } from '@context/AppContext';
import CameraRoll from '@react-native-community/cameraroll';
import { Loading } from "@element/Loading";
import React, { useContext, useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { isAndroid } from '@const/Setting';
import DeviceInfo from 'react-native-device-info'
import { View as ViewAnimated } from 'react-native-animatable';
const TakePictureCamera = () => {
  const { colorApp } = useContext(ContextContainer);
  const [isReadyCamera, setStateIsReadyCamera] = useState(false);
  const timeCount = useRef(0).current;

  useEffect(() => {
    checkPermissionCamera();
    return () => {
      clearTimeout(timeCount);
    }
  }, [])

  const checkPermissionCamera = () => {
    if (isAndroid) {
      check(PERMISSIONS.ANDROID.CAMERA)
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              checkEmulatorRenderCamera();
              break;
            case RESULTS.DENIED:
              break;
            case RESULTS.LIMITED:
              setStateIsReadyCamera(true);
              break;
            case RESULTS.GRANTED:
              setStateIsReadyCamera(true);
              break;
            case RESULTS.BLOCKED:
              break;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }

  const checkEmulatorRenderCamera = async () => {
    const isSimulator = await DeviceInfo.isEmulator();
    if (isSimulator) {
      timeCount = setTimeout(() => {
        setStateIsReadyCamera(true);
      }, 100)
    }
  }

  const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    saveFileInLibraryImage(data.uri);
  };

  const saveFileInLibraryImage = async (uri) => {
    await CameraRoll.save(`${uri}`, 'photo');
  }

  if (!isReadyCamera) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
      <ViewAnimated
        animation="fadeIn"
        useNativeDriver
        delay={50}
      >
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') {
              return <Loading />;
            } else {
              return (
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture} />
              );
            }
          }}
        </RNCamera>
      </ViewAnimated>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    borderRadius: 35,
    marginBottom: 65,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'red'
  },
});

export default TakePictureCamera;


