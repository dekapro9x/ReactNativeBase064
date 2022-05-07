import { ContextContainer } from '@context/AppContext';
import CameraRoll from '@react-native-community/cameraroll';
import { Loading } from "@element/Loading";
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const TakePictureCamera = () => {
  const { colorApp } = useContext(ContextContainer);
  const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    saveFileInLibraryImage(data.uri);
  };

  const saveFileInLibraryImage = async(uri) => {
     await CameraRoll.save(`${uri}`, 'photo');
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
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


