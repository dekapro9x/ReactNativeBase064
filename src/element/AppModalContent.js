import { black, white } from '@css/Color';
import React, { useImperativeHandle, useState } from 'react';
import { SafeAreaView, TouchableOpacity,View } from 'react-native';
import Modal from 'react-native-modal';
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { AppIcon } from './AppIcon';

const AppModalContent = (props, ref) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);
  useImperativeHandle(ref, () => ({showModalContent, closeModalContent}), []);

  const showModalContent = (renderContent) => {
    setContent(renderContent);
    setShow(true);
  };

  const closeModalContent = () => {
    setShow(false);
    setContent(null);
  };

  return (
    <Modal
      onModalShow= {() =>{console.log("onModalShow")}}
      onModalWillShow= {() =>{console.log("onModalWillShow")}}
      onModalHide= {() =>{console.log("onModalHide")}}
      onModalWillHide= {() =>{console.log("onModalWillHide")}}
      onBackdropPress= {() =>{console.log("onBackdropPress")}}
      onBackButtonPress= {() =>{console.log("onBackButtonPress")}}
      useNativeDriver={true}
      backdropOpacity={0.2}
      hideModalContentWhileAnimating={true}
      animationOut="fadeOut"
      animationInTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      isVisible={show}
      deviceHeight={SizeRpScreen.device_height}
      deviceWidth={SizeRpScreen.device_width}
      style={{
        margin: 0,
      }}>
      <SafeAreaView >
        <View style={{height:50, width:SizeRpScreen.device_width, backgroundColor:white}}>
       {!!show && <TouchableOpacity 
          onPress = {closeModalContent}
          style ={{height:50, width:50, 
          backgroundColor:white,
          alignItems: "center", 
          justifyContent: "center"}}> 
            <AppIcon 
            type ={"AntDesign"}
            name = {"closesquare"}
            size ={25}
            color ={black}
            ></AppIcon>
          </TouchableOpacity>}
        </View>
        <TouchableOpacity 
        onPress={closeModalContent}>
        <>{content}</>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default React.forwardRef(AppModalContent);
